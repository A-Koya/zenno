package interactor

import (
	"context"

	"github.com/A-Koya/zenno/usecase/port"
)

type Question struct {
	OutputPort   port.QuestionOutputport
	QuestionRepo port.QuestionRepository
}

func NewQuestionInputPort(outputPort port.QuestionOutputport, questionRepo port.QuestionRepository) port.QuestionInputport {
	return &Question{
		OutputPort:   outputPort,
		QuestionRepo: questionRepo,
	}
}
func (q *Question) FindByID(ctx context.Context, userID string) {
	question, err := q.QuestionRepo.FindByID(ctx, userID)
	if err != nil {
		q.OutputPort.RenderError(err)
		return
	}
	q.OutputPort.Render(question)
}
func (q *Question) QueryByOffset(ctx context.Context, offset string) {
	questions, err := q.QuestionRepo.QueryByOffset(ctx, offset)
	if err != nil {
		q.OutputPort.RenderError(err)
		return
	}
	q.OutputPort.Render(questions)
}
