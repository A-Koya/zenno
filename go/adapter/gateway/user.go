package gateway

import (
	"context"
	"database/sql"
	"time"

	"github.com/A-Koya/zenno/entity"
	"github.com/A-Koya/zenno/usecase/port"
	"github.com/A-Koya/zenno/usecase/util"
)

type UserRepository struct {
	Conn *sql.DB
}

func NewUserRepository(conn *sql.DB) port.UserRepository {
	return &UserRepository{
		Conn: conn,
	}
}
func (u *UserRepository) FindUser(ctx context.Context, ID string) ([]byte, error) {
	user := entity.User{
		ID:         "1",
		Name:       "ken",
		ImageUrl:   "https://github.com/shadcn.png",
		Updated_at: time.Now(),
	}
	jsonData, err := util.Marshal(user)
	return jsonData, err
}
