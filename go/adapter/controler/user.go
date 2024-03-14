package controler

import (
	"database/sql"
	"net/http"
)

type user struct {
	outputPort
	resistory
	inputPort
	db *sql.DB
}

func NewUser(db *sql.DB) *user {
	return &user{
		outputPort: ,
		db: db,
	}
}
func (u *user) FindByID(w http.ResponseWriter, r *http.Request) {
}
