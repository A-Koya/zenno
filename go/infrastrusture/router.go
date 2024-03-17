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
		AllowedOrigins:   []string{"http://localhost:3000"},  // 許可するオリジン
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"}, // 許可するメソッド
		AllowedHeaders:   []string{"Accept", "Content-Type"}, // 許可するヘッダー
		AllowCredentials: true,
		MaxAge:           300, // キャッシュする秒数
	})
	c.router.Use(cors.Handler)
	//ルーティングの定義
	c.router.Get("/userInfo/{userID}", c.Models.User.FindUser)
	c.router.Get("/questionFindByID", c.Models.Question.FindByID)
	c.router.Get("/questionQueryByOffset", c.Models.Question.QueryByOffset)
	return c
}

func (c *Config) Start() {
	fmt.Printf("Server launch with %s ports", c.port)
	log.Fatal(http.ListenAndServe(c.port, c.router))
}
