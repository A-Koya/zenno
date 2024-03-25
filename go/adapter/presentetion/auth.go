package presentetion

import (
	"fmt"
	"net/http"

	"github.com/A-Koya/zenno/usecase/port"
)

type Auth struct {
	w http.ResponseWriter
}

func NewAuthOutputPort(w http.ResponseWriter) port.AuthOutputport {
	return &Auth{
		w: w,
	}
}
func (q *Auth) Render(json []byte) {
	q.w.WriteHeader(http.StatusOK)
	q.w.Write(json)
}
func (q *Auth) RenderError(err error) {
	q.w.WriteHeader(http.StatusInternalServerError)
	fmt.Print(err)
	fmt.Fprint(q.w, err)
}
