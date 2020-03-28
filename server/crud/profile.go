package crud

import (
	"database/sql"
	"fmt"

	"math/rand"

	"github.com/rytaus/mobamanager/server/graph/model"
)

func firstName() string {
	firstNames := []string{
		"ryan", "masao", "kevin", "ian", "maddie", "jay", "teddie",
	}
	return firstNames[rand.Intn(len(firstNames))]
}

func lastName() string {
	lastNames := []string{
		"taus", "kitamura", "metelus", "lizard", "louis", "pattel", "chu",
	}
	return lastNames[rand.Intn(len(lastNames))]
}

func GenerateProfile(db *sql.DB) *model.Profile {
	profile := &model.Profile{
		FirstName: firstName(),
		LastName:  lastName(),
		GamerTag:  "gamer_tag",
		Birthday:  "2002-06-12",
	}

	return CreateProfile(db, profile)
}

func CreateProfile(db *sql.DB, profile *model.Profile) *model.Profile {
	result, err := db.Exec(`INSERT INTO
			profile(first_name, last_name, gamertag)
			VALUES(?, ?, ?)`, profile.FirstName, profile.LastName, profile.GamerTag)
	if err != nil {
		fmt.Println(err)
	}

	id, err := result.LastInsertId()
	profile.ID = int(id)
	return profile
}
