package entity

import "time"

type User struct {
	ID         int64
	Name       string
	Password   string
	ImageUrl   string
	Created_at time.Time
	Updated_at time.Time
	IsDeleted  bool
}
