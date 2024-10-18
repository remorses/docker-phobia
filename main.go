package main

import (
	"archive/tar"
	"bufio"
	"bytes"
	"compress/gzip"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"net/url"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"runtime"
	"sort"
	"strconv"
	"strings"
	"syscall"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	"github.com/gorilla/mux"
	"github.com/manifoldco/promptui"
	cmap "github.com/orcaman/concurrent-map/v2"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"github.com/urfave/cli/v2"
	"github.com/wagoodman/dive/dive"
	"github.com/wagoodman/dive/dive/filetree"
	"github.com/wagoodman/dive/dive/image"
)

var defaultPort = 8080

func main() {
	app := &cli.App{
		Name:  "docker-phobia",
		Usage: "Analyze a Docker image",
		Flags: []cli.Flag{
			&cli.BoolFlag{
				Name:  "tunnel",
				Usage: "Start a tunnel for remote access using cloudflared",
			},
		},
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

			if c.Bool("tunnel") {
				go func() {
					url, err := createTempTunnel(fmt.Sprintf("localhost:%d", defaultPort))
					if err != nil {
						fmt.Println("Error creating tunnel:", err)
						return
					}
					fmt.Println("Tunnel created:", url)
				}()
			}
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
	println("opening the browser at", baseURL+path)
	err = openBrowser(baseURL + path)
	if err != nil {
		// print the error but continue
		logrus.Error(err)
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
	println("analyzing image:", userImage)
	output, err := analyzeImage(userImage)
	if err != nil {

		logrus.Error(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)

		return
	}
	println("analyzed image:", userImage)
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

var currentlyAnalyzing = cmap.New[bool]()

func analyzeImage(userImage string) (*JsonOutput, error) {
	// Get the "image" parameter from the URL path
	sourceStr := "docker"
	value, ok := currentlyAnalyzing.Get(userImage)
	if ok && value {

		// wait until the image is done being analyzed
		for {
			value, ok := currentlyAnalyzing.Get(userImage)
			if !ok || !value {
				break
			}
			time.Sleep(1 * time.Second)
		}
	}
	currentlyAnalyzing.Set(userImage, true)
	defer func() {
		currentlyAnalyzing.Remove(userImage)
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

	fmt.Printf("fetched image in %d seconds\n", int(time.Since(start).Seconds()))

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
			if node.Data.DiffType == filetree.Added || node.Data.DiffType == filetree.Removed {
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
	Size    int32  `json:"value,omitempty"`
	Name    string `json:"name"`
	Deleted bool   `json:"deleted,omitempty"`
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

		return []*Node{}
	}

	if len(node.Children) == 0 && node.Data.DiffType != filetree.Removed && node.Data.FileInfo.Size < 100 {
		return []*Node{}
	}

	visited[node] = true
	defer delete(visited, node)

	// if node.Data.DiffType == filetree.Removed {
	// 	return nil
	// }

	size := int32(node.Data.FileInfo.Size)

	if node.Data.FileInfo.IsDir {
		size = 0
	}

	newNode := &Node{
		Size:    size,
		Name:    node.Name,
		Data:    node.Data,
		Path:    node.Path(),
		Deleted: node.Data.DiffType == filetree.Removed,
	}

	for _, child := range node.Children {

		childNodes := removeCyclesRecursive(child, visited, node)

		newNode.Children = append(newNode.Children, childNodes...)

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
	// Check if port 8080 is available
	addr, err := net.ResolveTCPAddr("tcp", "localhost:8080")
	if err != nil {
		return 0, err
	}

	l, err := net.ListenTCP("tcp", addr)
	if err == nil {
		defer l.Close()
		return l.Addr().(*net.TCPAddr).Port, nil
	}

	// If port 8080 is not available, find an open port using the zero trick
	addr, err = net.ResolveTCPAddr("tcp", "localhost:0")
	if err != nil {
		return 0, err
	}

	l, err = net.ListenTCP("tcp", addr)
	if err != nil {
		return 0, err
	}
	defer l.Close()
	return l.Addr().(*net.TCPAddr).Port, nil
}

func downloadCloudflared() (string, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return "", err
	}
	cloudflaredPath := filepath.Join(homeDir, ".docker-phobia", "cloudflared")

	// Check if the file already exists
	if _, err := os.Stat(cloudflaredPath); err == nil {
		return cloudflaredPath, nil
	}

	println("downloading cloudflared to " + cloudflaredPath)
	// Ensure the directory exists
	if err := os.MkdirAll(filepath.Dir(cloudflaredPath), 0755); err != nil {
		return "", err
	}

	// Determine the correct binary based on the current platform
	var binaryName string
	switch runtime.GOOS {
	case "darwin":
		if runtime.GOARCH == "amd64" {
			binaryName = "cloudflared-darwin-amd64.tgz"
		} else if runtime.GOARCH == "arm64" {
			binaryName = "cloudflared-darwin-arm64.tgz"
		}
	case "linux":
		if runtime.GOARCH == "amd64" {
			binaryName = "cloudflared-linux-amd64"
		} else if runtime.GOARCH == "386" {
			binaryName = "cloudflared-linux-386"
		} else if runtime.GOARCH == "arm" {
			binaryName = "cloudflared-linux-arm"
		} else if runtime.GOARCH == "arm64" {
			binaryName = "cloudflared-linux-arm64"
		}
	case "windows":
		if runtime.GOARCH == "amd64" {
			binaryName = "cloudflared-windows-amd64.exe"
		} else if runtime.GOARCH == "386" {
			binaryName = "cloudflared-windows-386.exe"
		}
	}

	if binaryName == "" {
		return "", fmt.Errorf("unsupported platform: %s/%s", runtime.GOOS, runtime.GOARCH)
	}

	// Download the binary
	url := fmt.Sprintf("https://github.com/cloudflare/cloudflared/releases/latest/download/%s", binaryName)
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("failed to download cloudflared: %s", resp.Status)
	}

	// If it's a .tgz file, we need to extract it
	if strings.HasSuffix(binaryName, ".tgz") {
		gzr, err := gzip.NewReader(resp.Body)
		if err != nil {
			return "", err
		}
		defer gzr.Close()

		tr := tar.NewReader(gzr)
		for {
			header, err := tr.Next()
			if err == io.EOF {
				break
			}
			if err != nil {
				return "", err
			}

			if header.Typeflag == tar.TypeReg && filepath.Base(header.Name) == "cloudflared" {
				out, err := os.OpenFile(cloudflaredPath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0755)
				if err != nil {
					return "", err
				}
				defer out.Close()

				if _, err := io.Copy(out, tr); err != nil {
					return "", err
				}
				break
			}
		}
	} else {
		// For non-tgz files, write directly to the file
		out, err := os.OpenFile(cloudflaredPath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0755)
		if err != nil {
			return "", err
		}
		defer out.Close()

		if _, err := io.Copy(out, resp.Body); err != nil {
			return "", err
		}
	}

	// Make the file executable (this is a no-op on Windows)
	if err := os.Chmod(cloudflaredPath, 0755); err != nil {
		return "", err
	}

	return cloudflaredPath, nil
}

func createTempTunnel(localURL string) (string, error) {
	cloudflaredPath, err := downloadCloudflared()
	println("creating tunnel with ", cloudflaredPath)
	if err != nil {
		return "", err
	}
	cmd := exec.Command(cloudflaredPath, "tunnel", "--url", localURL)

	// Set up pipes to capture and stream the command's stdout and stderr
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// Start the command
	if err := cmd.Start(); err != nil {
		return "", err
	}

	// Create a channel to signal when we've found the tunnel URL
	foundURL := make(chan string)

	// Start a goroutine to scan the output for the tunnel URL
	go func() {
		scanner := bufio.NewScanner(os.Stdout)
		for scanner.Scan() {
			line := scanner.Text()
			if strings.Contains(line, "https://") {
				tunnelURL := strings.TrimSpace(strings.Split(line, "|")[0])
				foundURL <- tunnelURL
				break
			}
		}
	}()

	// Wait for the tunnel URL or timeout
	var tunnelURL string
	select {
	case tunnelURL = <-foundURL:
		fmt.Printf("Tunnel created: %s\n", tunnelURL)
	case <-time.After(30 * time.Second):
		return "", fmt.Errorf("timeout waiting for tunnel URL")
	}

	// The tunnel will remain active as long as this process is running
	go func() {
		cmd.Wait()
	}()

	// Handle the case where the current process is killed
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		fmt.Println("Shutting down tunnel...")
		if err := cmd.Process.Kill(); err != nil {
			fmt.Printf("Failed to kill tunnel process: %v\n", err)
		}
		os.Exit(0)
	}()

	return tunnelURL, nil
}
