package port

import (
	"context"
	"net/http"
)

type QuestionInputport interface {
	FindByID(context.Context, string)
	QueryByOffset(context.Context, *http.Request)
	CreateQuestion(context.Context, *http.Request)
	ReserveTags(context.Context, *http.Request)
	QueryAwnser(context.Context, *http.Request)
}
type QuestionOutputport interface {
	Render([]byte)
	RenderError(error)
}
type QuestionRepository interface {
	FindByID(context.Context, string) ([]byte, error)
	QueryByOffset(context.Context, *http.Request) ([]byte, error)
	CreateQuestion(context.Context, *http.Request) ([]byte, error)
	ReserveTags(context.Context, *http.Request) ([]byte, error)
	QueryAwnser(context.Context, *http.Request) ([]byte, error)
}
