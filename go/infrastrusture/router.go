package infrastrusture

import (
	"github.com/go-chi/chi/v5"
)

func (c *Config) Routing() *Config {
	c.Router = chi.NewRouter()
	//ルーティングの定義

	return c
}
