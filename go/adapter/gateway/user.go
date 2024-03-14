package gateway

import (
	"database/sql"

	"github.com/A-Koya/zenno/usecase/repository"
)

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *repository.User {
	return &userRepository{
		db: db,
	}
}
