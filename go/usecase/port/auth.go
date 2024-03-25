package port

import (
	"context"
	"net/http"
)

type AuthInputport interface {
	Login(context.Context, *http.Request)
}
type AuthOutputport interface {
	Render([]byte)
	RenderError(error)
}
type AuthRepository interface {
	Login(context.Context, *http.Request) ([]byte, error)
}
