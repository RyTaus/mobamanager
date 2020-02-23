package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
)

type Summoner struct {
	ID          *string `json:"id"`
	First       *string `json:"first"`
	Last        *string `json:"last"`
	GamerTag    *string `json:"gamerTag"`
	Birthday    *string `json:"birthday"`
	Coachstat   *string `json:"coachstat"`
	Managerstat *string `json:"managerstat"`
	Playerstat  *string `json:"playerstat"`
}

type Summoners struct {
	Summoners []Summoner `json:"summoners`
}

func getUser(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	json.NewEncoder(rw).Encode(nil)
}

func main() {
	jsonFile, err := os.Open("mockdata.json")

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Successfully Opened mockdata.json")

	defer jsonFile.Close()

	byteValue, err := ioutil.ReadAll(jsonFile)

	var summoners Summoners
	json.Unmarshal(byteValue, &summoners)

	fmt.Println(summoners)
	for i := 0; i < len(summoners.Summoners); i++ {
		fmt.Println("{")
		fmt.Println("  ID: " + *summoners.Summoners[i].ID)
		fmt.Println("  Firstname: " + *summoners.Summoners[i].First)
		fmt.Println("  Lastname: " + *summoners.Summoners[i].Last)
		fmt.Println("  Gamertag: " + *summoners.Summoners[i].GamerTag)
		fmt.Println("  Birthday: " + *summoners.Summoners[i].Birthday)
		fmt.Println("  Coachstat : " + *summoners.Summoners[i].Coachstat)
		fmt.Println("  Managerstat: " + *summoners.Summoners[i].Managerstat)
		fmt.Println("  Playerstat: " + *summoners.Summoners[i].Playerstat)
		fmt.Println("}")
	}

	router := mux.NewRouter()
	router.HandleFunc("/api/user", getUser).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", router))

}
