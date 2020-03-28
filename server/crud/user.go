package crud

import (
	"database/sql"
	"fmt"
	"math/rand"

	"github.com/rytaus/mobamanager/server/graph/model"
)

func NewUser(db *sql.DB, username string, password string) *model.User {
	result, err := db.Exec("INSERT INTO user(username, password) VALUES(?, ?)", username, password)
	if err != nil {
		fmt.Println(err)
	}

	id, err := result.LastInsertId()
	fmt.Printf(string(id))
	return &model.User{ID: int(id), Username: username, Password: password}
}
