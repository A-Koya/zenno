package entity

import "time"

type Question struct {
	ID        string    `json:"id"`
	AuthorID  int       `json:"authorId"`
	Title     string    `json:"title"`
	Context   string    `json:"context"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	IsDeleted bool      `json:"isDeleted"`
}
