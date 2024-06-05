// taken from https://github.com/dondish/lionplayer
package main

/*
Reimplementation of https://github.com/jeffallen/seekinghttp/
WITHOUT cache (slows down more than it helps)
INSTEAD use buffered input and mostly refrain from making too big of skips.
*/

import (
	"bufio"
	"errors"
	"fmt"
	"io"
	"math"
	"net/http"
	"net/url"
	"os"
)

type Client interface {
	Do(req *http.Request) (*http.Response, error)
}

// SeekingHTTP uses a series of HTTP GETs with Range headers
// to implement io.ReadSeeker and io.ReaderAt.
type SeekingHTTP struct {
	URL     string
	Client  Client
	Debug   bool
	url     *url.URL
	offset  int64
	resp    io.ReadCloser
	respbuf *bufio.Reader
	length  int64
	open    bool
}

func (s *SeekingHTTP) Close() error {
	if s.open {
		s.open = false
		return s.resp.Close()
	}
	return nil
}

// Compile-time check of interface implementations.
var _ io.ReadSeeker = (*SeekingHTTP)(nil)
var _ io.ReaderAt = (*SeekingHTTP)(nil)

// New initializes a SeekingHTTP for the given URL.
// The SeekingHTTP.Client field may be set before the first call
// to Read or Seek.
func New(url string, length int64) *SeekingHTTP {
	return &SeekingHTTP{
		URL:    url,
		offset: 0,
		length: length,
	}
}

func (s *SeekingHTTP) newreq() (*http.Request, error) {
	var err error
	if s.url == nil {
		s.url, err = url.Parse(s.URL)
		if err != nil {
			return nil, err
		}
	}
	return &http.Request{
		Method:     "GET",
		URL:        s.url,
		Proto:      "HTTP/1.1",
		ProtoMajor: 1,
		ProtoMinor: 1,
		Header:     make(http.Header),
		Body:       nil,
		Host:       s.url.Host,
	}, nil
}

func fmtRange(from int64) string {
	return fmt.Sprintf("bytes=%v-", from)
}

// ReadAt reads len(buf) bytes into buf starting at offset off.
func (s *SeekingHTTP) ReadAt(buf []byte, off int64) (int, error) {
	if !s.open {
		req, err := s.newreq()
		if err != nil {
			return 0, err
		}

		rng := fmtRange(off)
		req.Header.Add("Range", rng)

		if err := s.init(); err != nil {
			return 0, err
		}
		resp, err := s.Client.Do(req)
		if err != nil {
			return 0, err
		}
		if resp.StatusCode == http.StatusOK || resp.StatusCode == http.StatusPartialContent {
			s.resp = resp.Body
			s.open = true
			if s.respbuf == nil {
				s.respbuf = bufio.NewReader(s.resp)
			} else {
				s.respbuf.Reset(s.resp)
			}
		}
	}
	return s.respbuf.Read(buf)
}

// If they did not give us an HTTP Client, use the default one.
func (s *SeekingHTTP) init() error {
	if s.Client == nil {
		s.Client = http.DefaultClient
	}

	return nil
}

func (s *SeekingHTTP) Read(buf []byte) (int, error) {
	n, err := s.ReadAt(buf, s.offset)
	if err == nil {
		s.offset += int64(n)
	}

	return n, err
}

// Seek sets the offset for the next Read.
func (s *SeekingHTTP) Seek(offset int64, whence int) (int64, error) {
	oldoff := s.offset
	switch whence {
	case io.SeekStart:
		s.offset = offset
	case io.SeekCurrent:
		s.offset += offset
	case io.SeekEnd:
		if s.length != math.MaxInt64 {
			s.offset = s.length - s.offset
		} else {
			return 0, errors.New("no seek end in a stream")
		}
	default:
		return 0, os.ErrInvalid
	}
	if s.offset == oldoff {
		return s.offset, nil
	}
	if s.offset > oldoff && s.offset-oldoff < int64(s.respbuf.Buffered()) {
		_, err := s.respbuf.Discard(int(s.offset - oldoff))
		if err != nil {
			return 0, err
		}
	} else {
		err := s.Close()
		if err != nil {
			return 0, err
		}
		if s.length == math.MaxInt64 {
			return 0, nil
		}
	}
	return s.offset, nil
}

// Size uses an HTTP HEAD to find out how many bytes are available in total.
func (s *SeekingHTTP) Size() (int64, error) {
	if err := s.init(); err != nil {
		return 0, err
	}

	req, err := s.newreq()
	if err != nil {
		return 0, err
	}
	req.Method = "HEAD"

	resp, err := s.Client.Do(req)
	if err != nil {
		return 0, err
	}

	if resp.ContentLength < 0 {
		return 0, errors.New("no content length for Size()")
	}

	return resp.ContentLength, nil
}
