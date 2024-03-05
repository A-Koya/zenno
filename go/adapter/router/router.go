package router

import (
	"log"
	"net/http"

	"github.com/A-Koya/zenno/control/handlers"
	"github.com/go-chi/chi/v5"
)

func StartRouting() {
	r := chi.NewRouter()
	r.Get("/cards", handlers.GetQuestionJson)
	log.Printf("ポート番号8080で待ち受けています。")
	log.Fatal(http.ListenAndServe(":8080", r))
}
