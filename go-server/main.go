package main

import (
	"bytes"

	"net/url"
	"sort"

	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"github.com/wagoodman/dive/dive"
	"github.com/wagoodman/dive/dive/filetree"
	"github.com/wagoodman/dive/dive/image"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/analyze/{image:.*}", imageAnalyzerHandler).Methods("POST", "GET")

	fmt.Println("Server listening on http://localhost:8080")
	http.ListenAndServe(":8080", r)
}

func imageAnalyzerHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	_userImage := vars["image"]
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

func analyzeImage(userImage string) (*JsonOutput, error) {
	// Get the "image" parameter from the URL path
	sourceStr := "docker"
	sourceType, imageStr := dive.DeriveImageSource(userImage)
	if sourceType == dive.SourceUnknown {

		sourceType = dive.ParseImageSource(sourceStr)
		if sourceType == dive.SourceUnknown {
			return nil, errors.Errorf("unable to determine image source: %v\n", sourceStr)
		}
		imageStr = userImage
	}
	imageResolver, err := dive.GetImageResolver(sourceType)
	if err != nil {

		return nil, errors.Wrap(err, "unable to determine image provider")
	}
	var img *image.Image = imgCache[userImage]
	if img == nil {
		img, err = imageResolver.Fetch(imageStr)
		if err != nil {
			return nil, errors.Wrap(err, "unable to resolve image")
		}
		imgCache[userImage] = img
	}

	result, err := img.Analyze()
	if err != nil {
		return nil, fmt.Errorf("unable to analyze: %v", err)
	}
	// cache := filetree.NewComparer(result.RefTrees)
	// errors := cache.BuildCache()
	// if len(errors) > 0 {
	// 	return nil, fmt.Errorf("unable to build cache: %d errors", len(errors))
	// }

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
	node := RemoveCycles(newTree.Root)

	allNodes := bfs(node)
	for _, node := range allNodes {
		if idx, ok := pathsToLayersIndex[node.Path]; ok {
			node.Layer = idx
		}
	}
	// sort layers by command
	sort.Slice(result.Layers, func(i, j int) bool {
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
	}

	return []*Node{newNode}
}
