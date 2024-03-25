package controler

import (
	"database/sql"
	"net/http"

	"github.com/A-Koya/zenno/adapter/gateway"
	"github.com/A-Koya/zenno/adapter/presentetion"
	"github.com/A-Koya/zenno/usecase/interactor"
	"github.com/A-Koya/zenno/usecase/port"
)

type Auth struct {
	OutputFactory func(w http.ResponseWriter) port.AuthOutputport
	InputFactory  func(o port.AuthOutputport, r port.AuthRepository) port.AuthInputport
	RepoFactory   func(c *sql.DB) port.AuthRepository
	Conn          *sql.DB
}

func NewAuth(conn *sql.DB) Auth {
	return Auth{
		OutputFactory: presentetion.NewAuthOutputPort,
		InputFactory:  interactor.NewAuthInputPort,
		RepoFactory:   gateway.NewAuthRepository,
		Conn:          conn,
	}
}
func (a *Auth) Login(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	outputPort := a.OutputFactory(w)
	repository := a.RepoFactory(a.Conn)
	inputPort := a.InputFactory(outputPort, repository)
	inputPort.Login(ctx, r)
}
