package main

import (
	"database/sql"
	"net/http"

	"github.com/RyTaus/mobamanager/server/graph/model"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
)

// THE MAIN METHOD

func main() {
	db, err := sql.Open("mysql", "moba:manager@tcp(keckmysql-rds.lmucs.com:3306)/moba_master")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	results, err := db.Query("SELECT id, username, password FROM `user`")

	for results.Next() {
		var user model.User
		err = results.Scan(&user.ID, &user.Username, &user.Password)
		if err != nil {
			panic(err.Error())
		}
		log.Printf(user.Username)
		log.Printf(user.Password)
	}
	router := mux.NewRouter()
	// router.HandleFunc("/user", getUser).Methods("GET")
	// router.HandleFunc("/user/{id}", getUserById).Methods("GET")
	// router.HandleFunc("/user", createUser).Methods("POST")
	// router.HandleFunc("/login", login).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", router))

}
