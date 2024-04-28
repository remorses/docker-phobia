package main

import (
	"bytes"
	"context"
	"log"
	"net"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"sort"
	"strconv"
	"strings"
	"syscall"
	"time"

	"net/url"

	"encoding/json"
	"fmt"
	"net/http"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	"github.com/manifoldco/promptui"
	"github.com/urfave/cli/v2"

	"github.com/gorilla/mux"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"github.com/wagoodman/dive/dive"
	"github.com/wagoodman/dive/dive/filetree"
	"github.com/wagoodman/dive/dive/image"
)

func main() {
	app := &cli.App{
		Name:  "docker-phobia",
		Usage: "Analyze a Docker image",
		Action: func(c *cli.Context) error {
			var selectedImage string
			ctx := context.Background()
			cli, err := client.NewClientWithOpts(client.FromEnv, client.WithAPIVersionNegotiation())
			if err != nil {
				return err
			}

			if c.NArg() > 0 {
				selectedImage = c.Args().Get(0)
			} else {
				images, err := cli.ImageList(ctx, types.ImageListOptions{})
				if err != nil {
					return err
				}

				sort.Slice(images, func(i, j int) bool {
					return images[i].Created > images[j].Created
				})

				imageNames := make([]string, 0)
				for _, image := range images {
					if len(image.RepoTags) > 0 {
						imageNames = append(imageNames, image.RepoTags[0])
					}
				}

				searcher := func(input string, index int) bool {
					image := imageNames[index]
					name := strings.Replace(strings.ToLower(image), " ", "", -1)
					input = strings.Replace(strings.ToLower(input), " ", "", -1)

					return strings.Contains(name, input)
				}

				prompt := promptui.Select{
					Label:    "Select a Docker image",
					Size:     20,
					Searcher: searcher,
					Items:    imageNames,
				}

				_, selectedImage, err = prompt.Run()
				if err != nil {
					return err
				}
			}

			selectedImage = strings.TrimSpace(selectedImage)

			serveWebsite(selectedImage)

			// Process the chosen Docker image
			return nil
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}

}

func serveWebsite(imageStr string) {
	router := mux.NewRouter()

	router.Use(enableCORS)

	router.HandleFunc("/analyze/{image:.*}", imageAnalyzerHandler).Methods("POST", "GET")
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(struct {
			Version string `json:"version"`
			Name    string `json:"name"`
		}{
			Version: "1.0.0",
			Name:    "docker-phobia",
		})
	}).Methods("GET")

	port, err := findOpenPort()
	if err != nil {
		log.Fatal(err)
	}
	go func() {
		fmt.Printf("internal server listening on http://localhost:%d\n", port)
		if err := http.ListenAndServe(":"+strconv.Itoa(port), router); err != nil {
			log.Fatal(err)
		}
	}()

	// Open the browser
	baseURL := os.Getenv("DOCKER_PHOBIA_BASE_URL")
	if baseURL == "" {
		baseURL = "https://docker-phobia.vercel.app"
	}
	path := "/image/" + imageStr + "?port=" + strconv.Itoa(port)
	err = openBrowser(baseURL + path)
	if err != nil {
		log.Fatal(err)
	}

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	<-sigChan
	os.Exit(0)

}

func openBrowser(url string) error {
	var err error
	switch runtime.GOOS {
	case "linux":
		err = exec.Command("xdg-open", url).Start()
	case "windows":
		err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin":
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("unsupported platform")
	}
	return err
}

func imageAnalyzerHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	_userImage := vars["image"]
	_userImage = strings.TrimSpace(_userImage)
	userImage, err := url.QueryUnescape(_userImage)
	if err != nil {
		logrus.Error(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	println("Analyzing image: ", userImage)
	output, err := analyzeImage(userImage)
	if err != nil {

		logrus.Error(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)

		return
	}
	println("Analyzed image:", userImage)
	// Send a response with the json
	w.Header().Set("Content-Type", "application/json")
	var buf bytes.Buffer
	enc := json.NewEncoder(&buf)
	enc.SetIndent("", "  ") // Use two spaces for indentation
	enc.SetEscapeHTML(false)

	// node.ComputeSize()

	err = enc.Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(buf.Bytes())
	// finish
	return

}

var imgCache = make(map[string]*image.Image)

var currentlyAnalyzing = make(map[string]bool)

func analyzeImage(userImage string) (*JsonOutput, error) {
	// Get the "image" parameter from the URL path
	sourceStr := "docker"
	if currentlyAnalyzing[userImage] {
		return nil, errors.New("image " + userImage + " is currently being analyzed")
	}
	currentlyAnalyzing[userImage] = true
	defer func() {
		delete(currentlyAnalyzing, userImage)
	}()

	sourceType, imageStr := dive.DeriveImageSource(userImage)
	if sourceType == dive.SourceUnknown {

		sourceType = dive.ParseImageSource(sourceStr)
		if sourceType == dive.SourceUnknown {
			return nil, errors.Errorf("unable to determine image source: %v\n", sourceStr)
		}
		println("parsing image source", sourceStr, userImage)
		imageStr = userImage
	}
	imageResolver, err := dive.GetImageResolver(sourceType)
	if err != nil {

		return nil, errors.Wrap(err, "unable to determine image provider")
	}
	var img *image.Image = imgCache[userImage]

	// log the time it takes to fetch in seconds
	start := time.Now()
	if img == nil {
		println("fetching image with resolver", sourceType.String())
		img, err = imageResolver.Fetch(imageStr)
		if err != nil {
			return nil, errors.Wrap(err, "unable to resolve image")
		}
		imgCache[userImage] = img
	}
	log.Println("fetched image in", time.Since(start).Seconds())

	println("analyzing")
	result, err := img.Analyze()
	if err != nil {
		return nil, fmt.Errorf("unable to analyze: %v", err)
	}
	// cache := filetree.NewComparer(result.RefTrees)
	// errors := cache.BuildCache()
	// if len(errors) > 0 {
	// 	return nil, fmt.Errorf("unable to build cache: %d errors", len(errors))
	// }

	println("stacking trees")
	newTree, pathErrors, err := filetree.StackTreeRange(result.RefTrees, 0, len(result.RefTrees)-1)

	pathsToLayersIndex := make(map[string]int)

	for idx := 1; idx < len(result.RefTrees)-1; idx++ {
		// mergedTree.VisitDepthChildFirst(func(node *filetree.FileNode) error {
		// 	node.Data.DiffType = filetree.Unmodified
		// 	return nil
		// }, nil)
		mergedTree, pathErrors, err := filetree.StackTreeRange(result.RefTrees, 0, idx-1)
		markPathErrors, err := mergedTree.CompareAndMark(result.RefTrees[idx])
		pathErrors = append(pathErrors, markPathErrors...)
		if err != nil {
			logrus.Errorf("error while building tree: %+v", err)
			return nil, err
		}
		mergedTree.VisitDepthChildFirst(func(node *filetree.FileNode) error {
			if node.Data.DiffType == filetree.Added {
				pathsToLayersIndex[node.Path()] = idx
			}
			return nil
		}, nil)
	}
	if len(pathErrors) > 0 {
		return nil, fmt.Errorf("expected no filepath errors, got %d", len(pathErrors))
	}
	// if err != nil {
	// 	return nil, fmt.Errorf("unable to stack trees: %v", err)
	// }
	println("removing cycles")
	node := RemoveCycles(newTree.Root)

	allNodes := bfs(node)
	for _, node := range allNodes {
		if idx, ok := pathsToLayersIndex[node.Path]; ok {
			node.Layer = idx
		}
	}
	// sort layers by command
	sort.Slice(result.Layers, func(i, j int) bool {
		// if result.Layers[i].Index == result.Layers[j].Index {
		// 	return result.Layers[i].Size < result.Layers[j].Size
		// }
		return result.Layers[i].Index < result.Layers[j].Index
	})

	layers := make([]Layer, len(result.Layers))
	for i, layer := range result.Layers {
		layers[i] = Layer{
			Command: layer.Command,
		}
	}
	output := JsonOutput{
		Layers: layers,
		Tree:   node,
	}
	if output.Tree.Name == "" {
		output.Tree.Name = "root"
	}
	return &output, nil

}

type Layer struct {
	Command string `json:"command"`
}

func bfs(node *Node) []*Node {
	var queue []*Node
	var result []*Node
	queue = append(queue, node)
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		result = append(result, current)
		for _, child := range current.Children {
			queue = append(queue, child)
		}
	}
	return result
}

type JsonOutput struct {
	Layers []Layer `json:"layers"`
	Tree   *Node   `json:"tree"`
}

// Node represents a node in the new tree without cycles.
// rename all fields to lowercase in json output
type Node struct {
	Size int32  `json:"value,omitempty"`
	Name string `json:"name"`
	// omit this in json
	Data     filetree.NodeData `json:"-"`
	Path     string            `json:"-"`
	Children []*Node           `json:"children,omitempty"`
	Layer    int               `json:"layer,omitempty"`
}

// func (node *Node) ComputeSize() {
// 	for _, child := range node.Children {
// 		child.ComputeSize()
// 		node.Size += child.Size
// 	}

// 	if len(node.Children) == 0 {
// 		node.Size += int32(node.Data.FileInfo.Size)
// 	}
// }

func RemoveCycles(root *filetree.FileNode) *Node {
	visited := make(map[*filetree.FileNode]bool)
	return removeCyclesRecursive(root, visited, nil)[0]
}

func removeCyclesRecursive(node *filetree.FileNode, visited map[*filetree.FileNode]bool, parent *filetree.FileNode) []*Node {
	if _, ok := visited[node]; ok {
		// Cycle detected, skip this node
		return nil
	}

	visited[node] = true
	defer delete(visited, node)

	if node.Data.DiffType == filetree.Removed {
		return nil
	}

	size := int32(node.Data.FileInfo.Size)

	if node.Data.FileInfo.IsDir {
		size = 0
	}

	newNode := &Node{
		Size: size,
		Name: node.Name,
		Data: node.Data,
		Path: node.Path(),
	}

	for _, child := range node.Children {
		childNodes := removeCyclesRecursive(child, visited, node)
		newNode.Children = append(newNode.Children, childNodes...)
		// sort them by size
		sort.Slice(newNode.Children, func(i, j int) bool {
			return newNode.Children[i].Name < newNode.Children[j].Name
		})
	}

	return []*Node{newNode}
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		// Preflight request
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func findOpenPort() (int, error) {
	addr, err := net.ResolveTCPAddr("tcp", "localhost:0")
	if err != nil {
		return 0, err
	}

	l, err := net.ListenTCP("tcp", addr)
	if err != nil {
		return 0, err
	}
	defer l.Close()
	return l.Addr().(*net.TCPAddr).Port, nil
}
