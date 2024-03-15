package port

import (
	"context"

	"github.com/A-Koya/zenno/entity"
)

type QuestionInputport interface {
	FindByID(context.Context, string)
}
type QuestionOutputport interface {
	Render(*entity.Question)
	RenderError(error)
}
type QuestionRepository interface {
	FindByID(context.Context, string) (*entity.Question, error)
}
