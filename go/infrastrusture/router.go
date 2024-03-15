package infrastrusture

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func (c *Config) Routing() *Config {
	c.router = chi.NewRouter()
	//ルーティングの定義
	c.router.Get("/question", c.Models.Question.FindByID)
	return c
}

func (c *Config) Start() {
	fmt.Printf("Server launch with %s ports", c.port)
	log.Fatal(http.ListenAndServe(c.port, c.router))
}
