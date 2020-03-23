package crud

import (
	"database/sql"
	"fmt"
	"math/rand"

	"github.com/rytaus/mobamanager/server/graph/model"
)

func firstName(r rand.Rand) string {
	firstNames := []string{
		"ryan", "masao", "kevin", "ian", "maddie", "jay", "teddie",
	}
	return firstNames[r.Intn(len(firstNames))]
}

func lastName(r rand.Rand) string {
	lastNames := []string{
		"taus", "kitamura", "metelus", "lizard", "louis", "pattel", "chu",
	}
	return lastNames[r.Intn(len(lastNames))]
}

func NewUser(db *sql.DB, username string, password string) *model.User {
	result, err := db.Exec("INSERT INTO user(username, password) VALUES(?, ?)", username, password)
	if err != nil {
		fmt.Println(err)
	}

	id, err := result.LastInsertId()
	fmt.Printf(string(id))
	return &model.User{ID: int(id), Username: username, Password: password}
}

func NewProfile(r rand.Rand) *model.Profile {
	return &model.Profile{
		FirstName: firstName(r),
		LastName:  lastName(r),
		GamerTag:  "The Kid",
		Birthday:  "2002-06-12",
	}
}
