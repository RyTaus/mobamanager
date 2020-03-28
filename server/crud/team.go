package crud

import (
	"github.com/rytaus/mobamanager/server/graph"
	"github.com/rytaus/mobamanager/server/graph/model"
)

// Query the database here
func GetAvailableLeague(r *graph.Resolver, user *model.User) *model.League {
	return &model.League{
		ID: 1,
	}
}

func CreateBaseTeamData(r *graph.Resolver, user *model.User, league *model.League) *model.Team {
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

func InitializeTeam(r *graph.Resolver, user *model.User) *model.Team {
	league := GetAvailableLeague(r, user)
	team := CreateBaseTeamData(r, user, league)

	for i := 1; i < 10; i++ {
		GenerateStartingPlayer(r, team)
	}

}
