package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"github.com/wagoodman/dive/dive"
	"github.com/wagoodman/dive/dive/filetree"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/analyze/{image}", imageAnalyzerHandler).Methods("POST", "GET")

	fmt.Println("Server listening on http://localhost:8080")
	http.ListenAndServe(":8080", r)
}

func imageAnalyzerHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userImage := vars["image"]
	json, err := analyzeImage(userImage)
	if err != nil {

		// fmt.Printf("%+v\n", err)
		logrus.Error(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)

		return
	}
	// Send a response with the json
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(json))
	// finish
	return

}

func analyzeImage(userImage string) (string, error) {
	// Get the "image" parameter from the URL path
	sourceStr := "docker"
	sourceType, imageStr := dive.DeriveImageSource(userImage)
	if sourceType == dive.SourceUnknown {

		sourceType = dive.ParseImageSource(sourceStr)
		if sourceType == dive.SourceUnknown {
			return "", errors.Errorf("unable to determine image source: %v\n", sourceStr)
		}
		imageStr = userImage
	}
	imageResolver, err := dive.GetImageResolver(sourceType)
	if err != nil {

		return "", errors.Wrap(err, "unable to determine image provider")
	}
	img, err := imageResolver.Fetch(imageStr)
	if err != nil {
		return "", fmt.Errorf("unable to fetch image: %v", err)
	}

	result, err := img.Analyze()
	if err != nil {
		return "", fmt.Errorf("unable to analyze: %v", err)
	}

	treeStack, failedPaths, err := filetree.StackTreeRange(result.RefTrees, 0, 0)
	if len(failedPaths) > 0 {
		return "", fmt.Errorf("expected no filepath errors, got %d", len(failedPaths))
	}
	if err != nil {
		return "", fmt.Errorf("unable to stack trees: %v", err)
	}
	json, err := fileTreeToJson(treeStack)
	if err != nil {
		return "", fmt.Errorf("unable to convert tree to json: %v", err)
	}

	return json, nil
}

func fileTreeToJson(tree *filetree.FileTree) (string, error) {
	var buf bytes.Buffer
	enc := json.NewEncoder(&buf)
	enc.SetIndent("", "  ") // Use two spaces for indentation
	enc.SetEscapeHTML(false)
	newNodes := RemoveCycles(tree.Root)
	output := JsonOutput{
		Tree: newNodes[0],
	}
	if output.Tree.Name == "" {
		output.Tree.Name = "root"
	}
	err := enc.Encode(output)
	if err != nil {
		return "", err
	}
	return buf.String(), nil
}

type JsonOutput struct {
	Tree *Node `json:"tree"`
}

// Node represents a node in the new tree without cycles.
// rename all fields to lowercase in json output
type Node struct {
	Size     int64             `json:"size,omitempty"`
	Name     string            `json:"name,omitempty"`
	Data     filetree.NodeData `json:"data,omitempty"`
	Path     string            `json:"path,omitempty"`
	Children []*Node           `json:"children,omitempty"`
}

// RemoveCycles creates a new tree without cycles by removing the nodes that cause the cycle.
func RemoveCycles(root *filetree.FileNode) []*Node {
	visited := make(map[*filetree.FileNode]bool)
	return removeCyclesRecursive(root, visited, nil)
}

func removeCyclesRecursive(node *filetree.FileNode, visited map[*filetree.FileNode]bool, parent *filetree.FileNode) []*Node {
	if _, ok := visited[node]; ok {
		// Cycle detected, skip this node
		return nil
	}

	visited[node] = true
	defer delete(visited, node)

	node.GetSize()
	newNode := &Node{
		Size: node.Size,
		Name: node.Name,

		// Data: node.Data,
		Path: node.Path(),
	}

	for _, child := range node.Children {
		childNodes := removeCyclesRecursive(child, visited, node)
		newNode.Children = append(newNode.Children, childNodes...)
	}

	return []*Node{newNode}
}
