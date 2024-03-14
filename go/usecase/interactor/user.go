package interactor

import (
	"context"

	"github.com/A-Koya/zenno/usecase/port"
	"github.com/A-Koya/zenno/usecase/repository"
)

type User struct {
	outputPort port.UserOutput
	repository repository.User
}

func NewUser(outputPort port.UserOutput, repository repository.User) port.UserInput {
	return &User{
		outputPort: outputPort,
		repository: repository,
	}
}
func (u *User) FindByID(ctx context.Context, userID int64) {
	u.outputPort.Render()
}
