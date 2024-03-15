package main

import "github.com/A-Koya/zenno/infrastrusture"

func main() {
	app := infrastrusture.NewConfig().DB().BuildModels().Routing()
	app.Port(":8080").Start()
}
