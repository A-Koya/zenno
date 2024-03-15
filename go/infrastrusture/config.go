package infrastrusture

import (
	"database/sql"

	"github.com/A-Koya/zenno/adapter"
	"github.com/go-chi/chi/v5"
)

type Config struct {
	router *chi.Mux
	Conn   *sql.DB
	port   string
	Models *adapter.Models
}

func NewConfig() *Config {
	return &Config{}
}

func (c *Config) Port(port string) *Config {
	c.port = port
	return c
}
