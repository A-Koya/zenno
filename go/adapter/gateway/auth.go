package gateway

import (
	"context"
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/A-Koya/zenno/usecase/port"
	"github.com/A-Koya/zenno/usecase/util"
)

type AuthRepository struct {
	Conn *sql.DB
}

func NewAuthRepository(conn *sql.DB) port.AuthRepository {
	return &AuthRepository{
		Conn: conn,
	}
}

func (a *AuthRepository) Login(ctx context.Context, r *http.Request) ([]byte, error) {
	var passName PassName
	err := json.NewDecoder(r.Body).Decode(&passName)
	if err != nil {
		return nil, err
	}
	stmt := `
		SELECT COUNT(*) AS RESULT
		FROM users
		WHERE user_name = $1 AND user_password = $2 AND is_deleted = false
		GROUP BY id
	`
	var result int
	err = a.Conn.QueryRowContext(ctx, stmt, passName.UserName, passName.Password).Scan(&result)
	if err != nil {
		return nil, err
	}
	if result > 0 {
		token := util.GetToken()
		return []byte(token), nil
	}
	return []byte("auth failed"), nil
}
