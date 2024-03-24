package gateway

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/A-Koya/zenno/entity"
	"github.com/A-Koya/zenno/usecase/port"
	"github.com/A-Koya/zenno/usecase/util"
	"github.com/google/uuid"
)

type QuestionRepository struct {
	Conn *sql.DB
}

func NewQuestionRepository(conn *sql.DB) port.QuestionRepository {
	return &QuestionRepository{
		Conn: conn,
	}
}
func (q *QuestionRepository) FindByID(ctx context.Context, ID string) ([]byte, error) {
	var question entity.Question
	stmt := `
		SELECT q.id,users.image_url,users.user_name,q.updated_at,q.title,q.content,COALESCE(good.good, 0) AS good,COALESCE(post.post,0) AS post,COALESCE(tags.tag_list, '{}') AS tag_list
		FROM questions q
		LEFT JOIN users ON q.author_id = users.id 
		LEFT JOIN (
			SELECT q.id AS K ,COUNT(question_good.id) AS good
			FROM questions q
			JOIN question_good ON q.id = question_good.rated
			GROUP BY q.id
		) good ON q.id = good.K
		LEFT JOIN (
			SELECT q.id AS K ,COUNT(answers.id) AS post
			FROM questions q
			JOIN answers ON q.id = answers.question_id
			GROUP BY q.id
		) post ON q.id = post.K
		LEFT JOIN (
			SELECT q.id AS K ,ARRAY_AGG(tags.tag_name) as tag_list
			FROM questions q
			JOIN tags ON q.id = tags.question_id
			GROUP BY q.id
		) tags ON q.id = tags.K
		WHERE q.is_deleted = false AND q.id = $1;
	`
	var tags []uint8
	err := q.Conn.QueryRowContext(ctx, stmt, ID).Scan(&question.ID, &question.ImageUrl, &question.Name, &question.Date, &question.Title, &question.Content, &question.Good, &question.Post, &tags)
	if err != nil {
		return nil, err
	}
	question.Tags = string(tags)
	jsonData, err := util.Marshal(question)
	return jsonData, err
}
func (q *QuestionRepository) QueryByOffset(ctx context.Context, r *http.Request) ([]byte, error) {
	param := r.URL.Query()
	offset := param.Get("offset")
	fmt.Println(offset)
	stmt := `
		SELECT q.id,users.image_url,users.user_name,q.updated_at,q.title,q.content,COALESCE(good.good, 0) AS good,COALESCE(post.post,0) AS post,COALESCE(tags.tag_list, '{}') AS tag_list
		FROM questions q
		LEFT JOIN users ON q.author_id = users.id 
		LEFT JOIN (
			SELECT q.id AS K ,COUNT(question_good.id) AS good
			FROM questions q
			JOIN question_good ON q.id = question_good.rated
			GROUP BY q.id
		) good ON q.id = good.K
		LEFT JOIN (
			SELECT q.id AS K ,COUNT(answers.id) AS post
			FROM questions q
			JOIN answers ON q.id = answers.question_id
			GROUP BY q.id
		) post ON q.id = post.K
		LEFT JOIN (
			SELECT q.id AS K ,ARRAY_AGG(tags.tag_name) as tag_list
			FROM questions q
			JOIN tags ON q.id = tags.question_id
			GROUP BY q.id
		) tags ON q.id = tags.K
		WHERE q.is_deleted = false
		ORDER BY good DESC
		OFFSET $1
		LIMIT 10;
	`
	rows, err := q.Conn.QueryContext(ctx, stmt, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var questions []entity.Question
	for rows.Next() {
		var question entity.Question
		var tags []uint8
		rows.Scan(&question.ID, &question.ImageUrl, &question.Name, &question.Date, &question.Title, &question.Content, &question.Good, &question.Post, &tags)
		question.Tags = string(tags)
		questions = append(questions, question)
	}
	jsonData, err := util.Marshal(questions)
	return jsonData, err
}

type reserveQuestion struct {
	Id      string `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
	Tags    string `json:"tags"`
}

func (q *QuestionRepository) CreateQuestion(ctx context.Context, r *http.Request) ([]byte, error) {
	var res reserveQuestion
	if err := json.NewDecoder(r.Body).Decode(&res); err != nil {
		return nil, err
	}
	ID := uuid.New().String()
	now := time.Now().Truncate(time.Minute)
	stmt1 := `
		INSERT INTO questions (id,author_id,title,content,updated_at,is_deleted)
		VALUES
		($1,$2,$3,$4,$5,$6);
	`
	stmt2 := `
		INSERT INTO tags (id,question_id,tag_name)
		VALUES
	`
	tags := strings.Split(res.Tags, ",")
	for i := 0; i < len(tags); i++ {
		stmt2 = stmt2 + fmt.Sprintf("($%d,$%d,$%d)", i*3+1, i*3+2, i*3+3)
		if i+1 == len(tags) {
			stmt2 = stmt2 + ";"
		} else {
			stmt2 = stmt2 + ","
		}
	}
	placeholder := []any{}
	for i := 0; i < len(tags); i++ {
		placeholder = append(placeholder, uuid.NewString())
		placeholder = append(placeholder, ID)
		placeholder = append(placeholder, tags[i])
	}
	tx, err := q.Conn.Begin()
	if err != nil {
		return nil, err
	}
	if _, err := tx.ExecContext(ctx, stmt1, ID, res.Id, res.Title, res.Content, now, false); err != nil {
		tx.Rollback()
		return nil, err
	}
	if _, err := tx.ExecContext(ctx, stmt2, placeholder...); err != nil {
		tx.Rollback()
		return nil, err
	}
	if err := tx.Commit(); err != nil {
		return nil, err
	}
	fmt.Println("トランザクション成功")
	return []byte("success"), nil
}

type resTag struct {
	Name string `json:"name"`
	Sum  string `json:"sum"`
}

func (q *QuestionRepository) ReserveTags(ctx context.Context, r *http.Request) ([]byte, error) {
	stmt := `
		SELECT COUNT(id) AS used,tag_name
		FROM tags
		GROUP BY tag_name
		ORDER BY used DESC
		LIMIT 20;
	`
	rows, err := q.Conn.QueryContext(ctx, stmt)
	if err != nil {
		return nil, err
	}
	var tags []resTag
	for rows.Next() {
		var tag resTag
		if err := rows.Scan(&tag); err != nil {
			return nil, err
		}
		tags = append(tags, tag)
	}
	jsonData, err := util.Marshal(tags)
	return jsonData, err
}
