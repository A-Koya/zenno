package gateway

import (
	"context"
	"database/sql"
	"encoding/json"
	"net/http"

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

type PassName struct {
	UserName string `json:"username"`
	Password string `json:"password"`
}
type Id struct {
	UserID string `json:"userID"`
}

func (u *UserRepository) FindUser(ctx context.Context, ID string) ([]byte, error) {
	var user entity.User
	stmt := "SElECT id,user_name,image_url FROM users WHERE id = $1 AND is_deleted = false"
	err := u.Conn.QueryRow(stmt, ID).Scan(&user.ID, &user.Name, &user.ImageUrl)
	if err != nil {
		return nil, err
	}
	jsonData, err := util.Marshal(user)
	return jsonData, err
}

func (u *UserRepository) CreateUser(ctx context.Context, r *http.Request) ([]byte, error) {
	var passName PassName
	if err := json.NewDecoder(r.Body).Decode(&passName); err != nil {
		return nil, err
	}
	id := uuid.New().String()
	stmt := "INSERT INTO users (id, user_name, user_password, image_url, is_deleted) VALUES ($1, $2, $3, $4, $5)"
	imageUrl := "https://github.com/shadcn.png"
	if _, err := u.Conn.ExecContext(ctx, stmt, id, passName.UserName, passName.Password, imageUrl, false); err != nil {
		return nil, err
	}
	var resID Id
	resID.UserID = id
	jsonData, err := util.Marshal(resID)
	return jsonData, err
}
