package entity

import "time"

type Question struct {
	ID       string    `json:"id"`
	ImageUrl string    `json:"imageUrl"`
	Name     string    `json:"name"`
	Date     time.Time `json:"date"`
	Title    string    `json:"title"`
	Content  string    `json:"content"`
	Tags     string    `json:"tags"`
	Good     int       `json:"good"`
	Post     int       `json:"post"`
}
