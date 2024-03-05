package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/A-Koya/zenno/domain/questionDatas"
)

func GetQuestionJson(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(questionDatas.Questiondata)
}
