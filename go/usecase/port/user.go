package port

import (
	"context"
	"net/http"
)

type UserInputPort interface {
	FindUser(context.Context, string)
	CreateUser(context.Context, *http.Request)
}
type UserOutputPort interface {
	Render([]byte)
	RenderError(error)
}
type UserRepository interface {
	FindUser(context.Context, string) ([]byte, error)
	CreateUser(context.Context, *http.Request) ([]byte, error)
}
