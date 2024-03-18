package presentetion

import (
	"fmt"
	"net/http"

	"github.com/A-Koya/zenno/usecase/port"
)

type User struct {
	w http.ResponseWriter
}

func NewUserOutputport(w http.ResponseWriter) port.UserOutputPort {
	return &User{
		w: w,
	}
}
func (u *User) Render(json []byte) {
	u.w.WriteHeader(http.StatusOK)
	u.w.Write(json)
}
func (u *User) RenderError(err error) {
	u.w.WriteHeader(http.StatusInternalServerError)
	fmt.Print(err)
	fmt.Fprint(u.w, err)
}
