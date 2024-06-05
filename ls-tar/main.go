package main

import (
	"archive/tar"
	"compress/gzip"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"

	"github.com/h2non/filetype"

	"github.com/google/go-containerregistry/pkg/name"
	"github.com/google/go-containerregistry/pkg/v1/remote/transport"

	"github.com/google/go-containerregistry/pkg/authn"
	// "github.com/jeffallen/seekinghttp"
)

func getRequest() http.Request {

	// ctx := context.Background()
	imageName := "debian"
	// Specify the image you want to access

	// get the following url https://registry-1.docker.io/v2/library/debian/blobs/sha256:3d53ef4019fc129ba03f90790f8f7f28fd279b9357cf3a71423665323b8807d3
	digest := "sha256:3d53ef4019fc129ba03f90790f8f7f28fd279b9357cf3a71423665323b8807d3"
	u := fmt.Sprintf("https://registry-1.docker.io/v2/library/%s/blobs/%s", imageName, digest)

	url, err := url.Parse(u)
	if err != nil {
		log.Fatal(err)
	}
	token := getAuthToken()
	req := http.Request{
		Method: "GET",
		URL:    url,
		Header: http.Header{
			"Authorization": []string{token},

			"Accept-Encoding": []string{"identity"},
			"Accept":          []string{"application/vnd.docker.image.rootfs.diff.tar.gzip"},
		},
	}
	return req
	// resp, err := http.DefaultClient.Do(&req)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer resp.Body.Close()
	// fmt.Println(resp.Status)

}

func getAuthToken() string {
	// ctx := context.Background()
	imageName := "debian:bullseye"

	// Parse the image name
	ref, err := name.ParseReference(imageName)
	if err != nil {
		log.Fatalf("Error parsing image name %s: %v", imageName, err)
	}
	auth, err := authn.DefaultKeychain.Resolve(ref.Context().Registry)
	// Create a transport that includes authentication
	t, err := transport.New(ref.Context().Registry, auth, http.DefaultTransport, []string{ref.Scope(transport.PullScope)})
	if err != nil {
		log.Fatalf("Error creating transport: %v", err)
	}

	// Make a request using the transport to get the token
	client := &http.Client{Transport: t}
	req, err := http.NewRequest("GET", fmt.Sprintf("https://%s/v2/", ref.Context().RegistryStr()), nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error making request: %v", err)
	}
	defer resp.Body.Close()

	// The token is typically set in the Authorization header of the request made by the transport
	// Since the transport automatically handles authentication, we need to inspect the headers sent
	token := req.Header.Get("Authorization")
	// fmt.Printf("Authorization Token: %s\n", token)
	return token
}

const (
	LevelDebug int = -4
	LevelInfo  int = 0
)

// CustomLogger is a custom implementation of the Logger interface
type CustomLogger struct {
	Level int
}

// Infof logs an informational message
func (l CustomLogger) Infof(format string, args ...interface{}) {
	if l.Level <= LevelInfo {
		log.Printf(fmt.Sprintf("[INFO] %s", format), args...)
	}
}

// Debugf logs a debug message
func (l CustomLogger) Debugf(format string, args ...interface{}) {
	if l.Level <= LevelDebug {
		log.Printf(fmt.Sprintf("[DEBUG] %s", format), args...)
	}
}

func (l CustomLogger) Fatal(args ...interface{}) {
	log.Fatal(args...)
}

var debug = flag.Bool("debug", false, "enable verbose output")

// create a new http client with Do method that can inject headers
type CustomHTTPClient struct {
	Headers http.Header
}

func (c *CustomHTTPClient) Do(req *http.Request) (*http.Response, error) {
	for k, v := range c.Headers {
		req.Header.Add(k, v[0])
	}
	return http.DefaultClient.Do(req)
}

func main() {
	req := getRequest()

	level := LevelInfo
	if *debug {
		level = LevelDebug
	}

	logger := &CustomLogger{Level: level}

	client := &CustomHTTPClient{
		Headers: req.Header,
	}

	url := req.URL.String()
	println("url", url)
	// download the tar file locally to inspect it
	resp, err := client.Do(&req)
	if err != nil {
		logger.Fatal(err)
	}
	// print the response headers
	for k, v := range resp.Header {
		logger.Infof("%s: %s", k, v)
	}
	defer resp.Body.Close()
	// save to test.tar
	tempFile := "test"
	f, err := os.Create(tempFile)
	if err != nil {
		logger.Fatal(err)
	}
	defer f.Close()
	_, err = io.Copy(f, resp.Body)
	if err != nil {
		logger.Fatal(err)
	}
	kind, _ := filetype.MatchFile(tempFile)
	if kind == filetype.Unknown {
		fmt.Println("Unknown file type")
		return
	}

	fmt.Printf("File type: %s. MIME: %s\n", kind.Extension, kind.MIME.Value)

	r := &SeekingHTTP{URL: url, Client: client}
	// r.SetLogger(logger)
	gzipReader, err := gzip.NewReader(r)
	if err != nil {
		panic(err)
	}
	defer gzipReader.Close()

	t := tar.NewReader(gzipReader)
	for {
		h, err := t.Next()
		if err == io.EOF {
			break
		}
		if err != nil {
			logger.Fatal(err)
		}
		logger.Infof("File: %s, Size: %s", h.Name, formatBytesSize(h.Size))
	}
	// if kind.Extension == "tar" {

	// } else if kind.MIME.Value == "application/zip" {
	// 	sz, err := r.Size()
	// 	if err != nil {
	// 		logger.Fatal(err)
	// 	}

	// 	z, err := zip.NewReader(r, sz)
	// 	if err != nil {
	// 		logger.Fatal(err)
	// 	}

	// 	for _, f := range z.File {
	// 		fmt.Println(f.FileHeader.Name)
	// 	}
	// 	return
	// }
	return

}

func formatBytesSize(size int64) string {
	const unit = 1000
	if size < unit {
		return fmt.Sprintf("%d B", size)
	}
	div, exp := int64(unit), 0
	for n := size / unit; n >= unit; n /= unit {
		div *= unit
		exp++
	}
	return fmt.Sprintf("%.1f %cB",
		float64(size)/float64(div), "kMGTPE"[exp])
}
