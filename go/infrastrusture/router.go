package infrastrusture

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

func (c *Config) Routing() *Config {
	c.router = chi.NewRouter()
	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type"},
		AllowCredentials: true,
		MaxAge:           300,
	})
	c.router.Use(cors.Handler)
	//ルーティングの定義
	c.router.Get("/userInfo/{userID}", c.Models.User.FindUser)
	c.router.Get("/questionFindByID/{questionID}", c.Models.Question.FindByID)
	c.router.Get("/questionQueryByOffset", c.Models.Question.QueryByOffset)
	c.router.Post("/user", c.Models.User.CreateUser)
	c.router.Post("/createQuestion", c.Models.Question.CreateQuestion)
	c.router.Post("/tags", c.Models.Question.ReserveTags)
	return c
}

func (c *Config) Start() {
	defer c.Conn.Close()
	fmt.Printf("Server launch with %s ports", c.port)
	log.Fatal(http.ListenAndServe(c.port, c.router))
}
