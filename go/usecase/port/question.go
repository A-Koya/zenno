package port

import (
	"context"
)

type QuestionInputport interface {
	FindByID(context.Context, string)
	QueryByOffset(context.Context, string)
}
type QuestionOutputport interface {
	Render([]byte)
	RenderError(error)
}
type QuestionRepository interface {
	FindByID(context.Context, string) ([]byte, error)
	QueryByOffset(context.Context, string) ([]byte, error)
}
