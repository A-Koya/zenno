package interactor

import (
	"context"
	"net/http"

	"github.com/A-Koya/zenno/usecase/port"
)

type Auth struct {
	OutputPort port.AuthOutputport
	AuthRepo   port.AuthRepository
}

func NewAuthInputPort(outputPort port.AuthOutputport, repository port.AuthRepository) port.AuthInputport {
	return &Auth{
		OutputPort: outputPort,
		AuthRepo:   repository,
	}
}
func (a *Auth) Login(ctx context.Context, r *http.Request) {
	token, err := a.AuthRepo.Login(ctx, r)
	if err != nil {
		a.OutputPort.RenderError(err)
	}
	a.OutputPort.Render(token)
}
