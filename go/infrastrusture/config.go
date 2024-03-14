package infrastrusture

import (
	"github.com/go-chi/chi/v5"
)

type Config struct {
	Router *chi.Mux
}

func NewConfig() Config {
	return Config{}
}
