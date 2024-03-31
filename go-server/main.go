package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/analyze/{image}", imageAnalyzerHandler).Methods("POST", "GET")

	fmt.Println("Server listening on http://localhost:8080")
	http.ListenAndServe(":8080", r)
}

func imageAnalyzerHandler(w http.ResponseWriter, r *http.Request) {
	// Get the "image" parameter from the URL path
	vars := mux.Vars(r)
	imageName := vars["image"]

	// Perform image analysis logic here
	// ...

	// Send a response
	fmt.Fprintf(w, "Image %s analyzed successfully", imageName)
}
