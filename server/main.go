package main

import (
	"database/sql"
	"encoding/json"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/rytaus/mobamanager/server/graph/model"
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

func getUserById(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json; charset=UTF-8")
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	// rw.Header().Set("Content-Type", "application/json")
	db, err := sql.Open("mysql", "moba:manager@tcp(keckmysql-rds.lmucs.com:3306)/moba_master")
	defer db.Close()
	var user model.User
	result, err := db.Query("SELECT id, username, password FROM `user` WHERE id = " + r.Header.Get("id"))
	err = result.Scan(&user.ID, &user.Username, &user.Password)
	if err != nil {
		panic(err.Error())
	}
	json.NewEncoder(rw).Encode(user)
}

// THE MAIN METHOD
func GetDiscs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	log.Error(string(body))
}

func main() {
	router := mux.NewRouter()
	handler := http.HandlerFunc(mainHandler)
	router.Methods("GET").Path("/").Handler(handler)

	router.HandleFunc("/user", getUsers).Methods("GET")
	allowedOrigins := handlers.AllowedOrigins([]string{"*"})
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Accept", "Content-Type", "Content-Length", "Accept-Encoding", "Accept-Language", "X-CSRF-Token", "Authorization"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "HEAD", "OPTIONS"})

	// router.HandleFunc("/user/{id}", getUserById).Methods("GET")
	// router.HandleFunc("/user", createUser).Methods("POST")
	// router.HandleFunc("/login", login).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080",
		handlers.CORS(allowedOrigins, headersOk, allowedMethods)(router)))

}
