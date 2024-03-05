package questionDatas

type questionData struct {
	Id       int      `json:"id"`
	CardLink string   `json:"cardLink"`
	ImageUrl string   `json:"imageUrl"`
	Name     string   `json:"name"`
	Date     string   `json:"date"`
	Title    string   `json:"title"`
	Content  string   `json:"content"`
	Tags     []string `json:"tags"`
	Good     int      `json:"good"`
	Post     int      `json:"Post"`
}
type AllquestionDatas []questionData

var Questiondata = AllquestionDatas{
	{
		Id:       1,
		CardLink: "localhost://8080",
		ImageUrl: "https://github.com/shadcn.png",
		Name:     "kebin",
		Date:     "2022-1-1",
		Title:    "トマト栽培のコツを教えて",
		Content:  "私は自宅でトマトを栽培しており...",
		Tags:     []string{"初心者", "初心者", "初心者"},
		Good:     12,
		Post:     12,
	},
	{
		Id:       2,
		CardLink: "localhost://8080",
		ImageUrl: "https://github.com/shadcn.png",
		Name:     "nick",
		Date:     "2022-1-1",
		Title:    "トマト栽培のコツを教えて",
		Content:  "私は自宅でトマトを栽培しており...",
		Tags:     []string{"初心者", "初心者", "初心者"},
		Good:     12,
		Post:     12,
	},
}
