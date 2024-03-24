package interactor

import (
	"context"
	"net/http"

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
func (q *Question) QueryByOffset(ctx context.Context, r *http.Request) {
	questions, err := q.QuestionRepo.QueryByOffset(ctx, r)
	if err != nil {
		q.OutputPort.RenderError(err)
		return
	}
	q.OutputPort.Render(questions)
}
func (q *Question) CreateQuestion(ctx context.Context, r *http.Request) {
	res, err := q.QuestionRepo.CreateQuestion(ctx, r)
	if err != nil {
		q.OutputPort.RenderError(err)
		return
	}
	q.OutputPort.Render(res)
}
func (q *Question) ReserveTags(ctx context.Context, r *http.Request) {
	res, err := q.QuestionRepo.ReserveTags(ctx, r)
	if err != nil {
		q.OutputPort.RenderError(err)
		return
	}
	q.OutputPort.Render(res)
}
