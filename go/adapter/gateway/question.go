package gateway

import (
	"context"
	"database/sql"
	"time"

	"github.com/A-Koya/zenno/entity"
	"github.com/A-Koya/zenno/usecase/port"
)

type QuestionRepository struct {
	conn *sql.DB
}

func NewQuestionRepository(conn *sql.DB) port.QuestionRepository {
	return &QuestionRepository{
		conn: conn,
	}
}
func (q *QuestionRepository) FindByID(ctx context.Context, ID string) (*entity.Question, error) {
	mockQuestion := entity.Question{
		ID:        "123",
		AuthorID:  456,
		Title:     "How to create mock data?",
		Context:   "I need to create mock data for testing purposes.",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsDeleted: false,
	}

	return &mockQuestion, nil
}
