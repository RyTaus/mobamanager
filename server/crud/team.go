package crud

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"

	"github.com/rytaus/mobamanager/server/graph/model"
)

// Query the database here
func GetAvailableLeague(db *sql.DB, user *model.User) *model.League {
	// Something like look for 1 leagues WHERE teams < 10 SORT by league.division?
	return &model.League{
		ID: 2,
	}
}

func GenerateBaseTeamData(db *sql.DB, user *model.User, league *model.League) *model.Team {
	team := &model.Team{
		User:   user,
		League: league,
		Name:   user.Username + " Gaming",
		Fans:   300,
		Money:  10000,
	}
	// push team to DB
	return team
}

func InitializeTeam(db *sql.DB, user *model.User) *model.Team {
	league := GetAvailableLeague(db, user)
	team := GenerateBaseTeamData(db, user, league)

	team = CreateTeam(db, team)

	for i := 1; i < 10; i++ {
		player := GenerateStartingPlayer(db, team)
		s, _ := json.MarshalIndent(player, "", "\t")
		log.Printf(string(s))
	}

	//
	return team
}

func CreateTeam(db *sql.DB, team *model.Team) *model.Team {
	result, err := db.Exec(`INSERT INTO
			team(user_id, league_id, name, money)
			VALUES(?, ?, ?, ?)`, team.User.ID, team.League.ID, team.Name, team.Money)
	if err != nil {
		fmt.Println(err)
	}

	id, err := result.LastInsertId()
	team.ID = int(id)
	return team
}
