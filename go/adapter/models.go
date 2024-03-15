package adapter

import (
	"database/sql"

	"github.com/A-Koya/zenno/adapter/controler"
)

type Models struct {
	Question controler.Question
}

func NewModels() *Models {
	return &Models{}
}

func (m *Models) SetsModels(conn *sql.DB) {
	//モデルを登録
	m.Question = controler.NewQuestion(conn)
}
