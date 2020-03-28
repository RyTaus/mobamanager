package crud

import (
	"math/rand"

	"github.com/rytaus/mobamanager/server/graph"
	"github.com/rytaus/mobamanager/server/graph/model"
)

func calculateWage(plater *model.Player) int {
	// some fuzzy math here with their stats and age?
	return 20
}

func genStat() float64 {
	first := rand.Float64() * 7
	second := (rand.Float64() * 4) + 2
	return (first + second) / 2
}

func setStartingStats(player *model.Player) {
	// Just do all the stats here.
	player.LastHit = genStat()

}

func GenerateStartingPlayer(r graph.Resolver, team *model.Team) *model.Player {
	player := &model.Player{}

	player.Profile = GenerateProfile()
	setStartingStats(player)
	player.Wage = calculateWage(player)
	player.Team = team

	return player

}
