package gateway

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/A-Koya/zenno/entity"
	"github.com/A-Koya/zenno/usecase/port"
	"github.com/A-Koya/zenno/usecase/util"
	"github.com/google/uuid"
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

type PassName struct {
	UserName string `json:"username"`
	Password string `json:"password"`
}

func (u *UserRepository) CreateUser(ctx context.Context, r *http.Request) ([]byte, error) {
	var passName PassName
	if err := json.NewDecoder(r.Body).Decode(&passName); err != nil {
		return nil, err
	}
	fmt.Println(passName.UserName)
	fmt.Println(passName.Password)
	id := uuid.New().String()
	fmt.Println(id)
	query := "INSERT INTO users (id, user_name, user_password, image_url, is_deleted) VALUES ($1, $2, $3, $4, $5)"
	imageUrl := "https://github.com/shadcn.png"
	if _, err := u.Conn.Exec(query, id, passName.UserName, passName.Password, imageUrl, false); err != nil {
		return nil, err
	}
	return []byte("success"), nil
}
