package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
)

func getUser(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	json.NewEncoder(rw).Encode(nil)
}

func main() {
	fmt.Printf("hello, world\n")
	router := mux.NewRouter()
	router.HandleFunc("/api/user", getUser).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", router))

}
