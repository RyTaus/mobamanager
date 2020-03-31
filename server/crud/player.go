package crud

import (
	"database/sql"
	"fmt"
	"math/rand"

	"github.com/rytaus/mobamanager/server/graph/model"
)

func calculateWage(player *model.Player) int {
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

func GenerateStartingPlayer(db *sql.DB, team *model.Team) *model.Player {
	player := &model.Player{}

	player.Profile = GenerateProfile(db)
	setStartingStats(player)
	player.Wage = calculateWage(player)
	player.Team = team

	return CreatePlayer(db, player)
}

func CreatePlayer(db *sql.DB, player *model.Player) *model.Player {
	result, err := db.Exec(`INSERT INTO 
			player(profile_id, team_id, vision, champion_pool, last_hit)
			VALUES(?, ?, ?, ?, ?)`,
		player.Profile.ID, player.Team.ID, player.Vision, player.ChampionPool, player.LastHit)
	if err != nil {
		fmt.Println(err)
	}

	id, err := result.LastInsertId()
	player.ID = int(id)
	return player
}
