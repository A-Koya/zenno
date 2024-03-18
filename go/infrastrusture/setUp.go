package infrastrusture

import (
	"database/sql"
	"log"

	"github.com/A-Koya/zenno/adapter"
	_ "github.com/lib/pq"
)

var err error

func (c *Config) DB() *Config {
	c.Conn, err = sql.Open("postgres", "host=postgres port=5432 user=root password=password dbname=zenno sslmode=disable")
	if err != nil {
		log.Fatal("db connection failed", err)
	}
	return c
}

func (c *Config) BuildModels() *Config {
	c.Models = adapter.NewModels()
	c.Models.SetsModels(c.Conn)
	return c
}
