package controler

import (
	"database/sql"
	"net/http"
	"strings"

	"github.com/A-Koya/zenno/adapter/gateway"
	"github.com/A-Koya/zenno/adapter/presentetion"
	"github.com/A-Koya/zenno/usecase/interactor"
	"github.com/A-Koya/zenno/usecase/port"
)

type Question struct {
	OutputFactory func(w http.ResponseWriter) port.QuestionOutputport
	InputFactory  func(o port.QuestionOutputport, r port.QuestionRepository) port.QuestionInputport
	RepoFactory   func(c *sql.DB) port.QuestionRepository
	Conn          *sql.DB
}

func NewQuestion(conn *sql.DB) Question {
	return Question{
		OutputFactory: presentetion.NewQuestionOutputPort,
		InputFactory:  interactor.NewQuestionInputPort,
		RepoFactory:   gateway.NewQuestionRepository,
		Conn:          conn,
	}
}

func (q *Question) FindByID(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	userID := strings.TrimPrefix(r.URL.Path, "/questionFindByID/")
	outputPort := q.OutputFactory(w)
	repository := q.RepoFactory(q.Conn)
	inputPort := q.InputFactory(outputPort, repository)
	inputPort.FindByID(ctx, userID)
}
func (q *Question) QueryByOffset(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	outputPort := q.OutputFactory(w)
	repository := q.RepoFactory(q.Conn)
	inputPort := q.InputFactory(outputPort, repository)
	inputPort.QueryByOffset(ctx, r)
}
func (q *Question) CreateQuestion(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	outputPort := q.OutputFactory(w)
	repository := q.RepoFactory(q.Conn)
	inputPort := q.InputFactory(outputPort, repository)
	inputPort.CreateQuestion(ctx, r)
}
func (q *Question) ReserveTags(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	outputPort := q.OutputFactory(w)
	repository := q.RepoFactory(q.Conn)
	inputPort := q.InputFactory(outputPort, repository)
	inputPort.ReserveTags(ctx, r)
}
func (q *Question) QueryAwnser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	outputPort := q.OutputFactory(w)
	repository := q.RepoFactory(q.Conn)
	inputPort := q.InputFactory(outputPort, repository)
	inputPort.QueryAwnser(ctx, r)
}
