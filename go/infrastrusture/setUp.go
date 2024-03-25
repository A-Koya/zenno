package infrastrusture

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/A-Koya/zenno/adapter"
	_ "github.com/lib/pq"
)

var err error

func (c *Config) DB() *Config {
	connect := fmt.Sprintf("host=postgres port=%s user=%s password=%s dbname=%s sslmode=disable", os.Getenv("port"), os.Getenv("user"), os.Getenv("password"), os.Getenv("dbname"))
	c.Conn, err = sql.Open("postgres", connect)
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
