package crud

import (
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

func GenerateProfile() *model.Profile {
	return &model.Profile{
		FirstName: firstName(),
		LastName:  lastName(),
		GamerTag:  "gamer_tag",
		Birthday:  "2002-06-12",
	}
}
