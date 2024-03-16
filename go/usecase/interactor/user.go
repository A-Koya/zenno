package interactor

import (
	"context"

	"github.com/A-Koya/zenno/usecase/port"
)

type User struct {
	OutputPort port.UserOutputPort
	UserRepo   port.UserRepository
}

func NewUserInputport(outputPort port.UserOutputPort, userRepository port.UserRepository) port.UserInputPort {
	return &User{
		OutputPort: outputPort,
		UserRepo:   userRepository,
	}
}
func (u *User) FindUser(ctx context.Context, ID string) {
	question, err := u.UserRepo.FindUser(ctx, ID)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.Render(question)
}
