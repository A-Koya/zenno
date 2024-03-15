package gateway

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
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
func (q *QuestionRepository) FindByID(ctx context.Context, ID string) ([]byte, error) {
	mockQuestion := entity.Question{
		ID:        "123",
		AuthorID:  456,
		Title:     "How to create mock data?",
		Context:   "I need to create mock data for testing purposes.",
		UpdatedAt: time.Now(),
	}

	jsonData, err := json.Marshal(mockQuestion)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}
	return jsonData, nil
}
func (q *QuestionRepository) QueryByOffset(ctx context.Context, offset string) ([]byte, error) {
	mockDatas := []entity.Question{
		{
			ID:        "ID_1",
			AuthorID:  1000,
			Title:     "Broccoli",
			Context:   "Broccoli is a green vegetable that is high in vitamins and fiber.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_2",
			AuthorID:  1001,
			Title:     "Carrot",
			Context:   "Carrots are root vegetables that are rich in beta-carotene and vitamin A.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_3",
			AuthorID:  1002,
			Title:     "Spinach",
			Context:   "Spinach is a leafy green vegetable that is high in iron and other nutrients.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_4",
			AuthorID:  1003,
			Title:     "Tomato",
			Context:   "Tomatoes are fruits that are commonly used as vegetables in cooking. They are rich in lycopene.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_5",
			AuthorID:  1004,
			Title:     "Bell Pepper",
			Context:   "Bell peppers come in various colors such as red, green, and yellow. They are rich in vitamins and antioxidants.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_6",
			AuthorID:  1005,
			Title:     "Cucumber",
			Context:   "Cucumbers are refreshing vegetables that are low in calories and high in water content.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_7",
			AuthorID:  1006,
			Title:     "Lettuce",
			Context:   "Lettuce is a leafy green vegetable commonly used in salads. It is low in calories and rich in vitamins.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_8",
			AuthorID:  1007,
			Title:     "Onion",
			Context:   "Onions are root vegetables with a pungent flavor. They are used in various cuisines around the world.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_9",
			AuthorID:  1008,
			Title:     "Potato",
			Context:   "Potatoes are starchy tuberous vegetables that are a staple food in many cultures. They can be boiled, fried, or baked.",
			UpdatedAt: time.Now(),
		},
		{
			ID:        "ID_10",
			AuthorID:  1009,
			Title:     "Zucchini",
			Context:   "Zucchini is a summer squash that is often used in savory dishes. It is low in calories and rich in vitamins.",
			UpdatedAt: time.Now(),
		},
	}
	jsonData, err := json.Marshal(mockDatas)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}
	return jsonData, nil
}
