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
	jsonData, err := json.Marshal(user)
	if err != nil {
		fmt.Printf("error occuerd %s", err)
		return nil, err
	}
	return jsonData, nil
}
