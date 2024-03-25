package adapter

import (
	"database/sql"

	"github.com/A-Koya/zenno/adapter/controler"
)

type Models struct {
	Question controler.Question
	User     controler.User
	Auth     controler.Auth
}

func NewModels() *Models {
	return &Models{}
}

func (m *Models) SetsModels(conn *sql.DB) {
	//モデルを登録
	m.Question = controler.NewQuestion(conn)
	m.User = controler.NewUser(conn)
	m.Auth = controler.NewAuth(conn)
}
