package port

import "context"

type UserInputPort interface {
	FindUser(context.Context, string)
}
type UserOutputPort interface {
	Render([]byte)
	RenderError(error)
}
type UserRepository interface {
	FindUser(context.Context, string) ([]byte, error)
}
