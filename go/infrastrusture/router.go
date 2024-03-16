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
	c.router.Get("/userFind/{userID}", c.Models.User.FindUser)
	c.router.Get("/questionFindByID", c.Models.Question.FindByID)
	c.router.Get("/questionQueryByOffset", c.Models.Question.QueryByOffset)
	return c
}

func (c *Config) Start() {
	fmt.Printf("Server launch with %s ports", c.port)
	log.Fatal(http.ListenAndServe(c.port, c.router))
}
