package presentetion

import (
	"fmt"
	"net/http"

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
func (q *Question) Render(json []byte) {
	q.w.WriteHeader(http.StatusOK)
	q.w.Write(json)
}
func (q *Question) RenderError(err error) {
	q.w.WriteHeader(http.StatusInternalServerError)
	fmt.Print(err)
	fmt.Fprint(q.w, err)
}
