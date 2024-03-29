package controler

import (
	"database/sql"
	"net/http"
	"strings"

	"github.com/A-Koya/zenno/adapter/gateway"
	"github.com/A-Koya/zenno/adapter/presentetion"
	"github.com/A-Koya/zenno/usecase/interactor"
	"github.com/A-Koya/zenno/usecase/port"
)

type User struct {
	OutputFactory func(w http.ResponseWriter) port.UserOutputPort
	InputFactory  func(o port.UserOutputPort, r port.UserRepository) port.UserInputPort
	RepoFactory   func(conn *sql.DB) port.UserRepository
	Conn          *sql.DB
}

func NewUser(conn *sql.DB) User {
	return User{
		OutputFactory: presentetion.NewUserOutputport,
		InputFactory:  interactor.NewUserInputport,
		RepoFactory:   gateway.NewUserRepository,
		Conn:          conn,
	}
}

func (u *User) FindUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	ID := strings.TrimPrefix(r.URL.Path, "/questionFindByID/")
	outputPort := u.OutputFactory(w)
	repository := u.RepoFactory(u.Conn)
	inputPort := u.InputFactory(outputPort, repository)
	inputPort.FindUser(ctx, ID)
}
func (u *User) CreateUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	outputPort := u.OutputFactory(w)
	repository := u.RepoFactory(u.Conn)
	inputPort := u.InputFactory(outputPort, repository)
	inputPort.CreateUser(ctx, r)
}
