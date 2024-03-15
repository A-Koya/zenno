package presentetion

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/A-Koya/zenno/entity"
	"github.com/A-Koya/zenno/usecase/port"
)

type Question struct {
	w http.ResponseWriter
}

func NewQuestionOutputPort(w http.ResponseWriter) port.QuestionOutputport {
	return &Question{
		w: w,
	}
}
func (q *Question) Render(question *entity.Question) {
	jsonData, err := json.Marshal(question)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	q.w.WriteHeader(http.StatusOK)
	q.w.Write(jsonData)
}
func (q *Question) RenderError(err error) {
	q.w.WriteHeader(http.StatusInternalServerError)
	fmt.Fprint(q.w, err)
}
