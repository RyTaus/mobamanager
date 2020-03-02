package main

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/RyTaus/mobamanager/server/graph/model"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
)

// type Config struct {
// 	HttpPort     string
// 	DatabasePath string
// }

// func NewConfig() *Config {
// 	return &Config{
// 		HttpPort:     ":8080",
// 		DatabasePath: "moba:manager@tcp(keckmysql-rds.lmucs.com:3306)/moba_master",
// 	}
// }

// func connectDatabase(config *Config) (*sql.DB, error) {
// 	return sql.Open("mysql", config.DatabasePath)
// }

func getUsers(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	db, err := sql.Open("mysql", "moba:manager@tcp(keckmysql-rds.lmucs.com:3306)/moba_master")
	defer db.Close()
	results, err := db.Query("SELECT id, username, password FROM `user`")
	var users []model.User
	for results.Next() {
		var user model.User
		err = results.Scan(&user.ID, &user.Username, &user.Password)
		if err != nil {
			panic(err.Error())
		}
		users = append(users, user)
	}

	json.NewEncoder(rw).Encode(users)

}

// THE MAIN METHOD

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/user", getUsers).Methods("GET")
	// router.HandleFunc("/user/{id}", getUserById).Methods("GET")
	// router.HandleFunc("/user", createUser).Methods("POST")
	// router.HandleFunc("/login", login).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", router))

}
