package port

import "context"

type UserInput interface {
	CreateUser(ctx context.Context, ID int64, name, password, imageUrl string)
	DeleteUser(context.Context, int64)
	UpdateUser(ctx context.Context, ID int64, name, password, imageUrl string)
	FindByID(context.Context, int64)
}
type UserOutput interface {
	Render()
}
