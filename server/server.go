package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	_ "github.com/go-sql-driver/mysql"
	"github.com/rytaus/mobamanager/server/auth"
	"github.com/rytaus/mobamanager/server/crud"
	"github.com/rytaus/mobamanager/server/graph"
	"github.com/rytaus/mobamanager/server/graph/generated"
	"github.com/rytaus/mobamanager/server/graph/model"
)

const defaultPort = "8080"

func testStuff(db *sql.DB) {
	user := &model.User{
		ID:       0,
		Username: "rydagoat",
	}
	team := crud.InitializeTeam(db, user)

	s, _ := json.MarshalIndent(team, "", "\t")
	log.Printf(string(s))
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	db, _ := sql.Open("mysql", "moba:manager@tcp(keckmysql-rds.lmucs.com:3306)/moba_master")
	defer db.Close()

	router := chi.NewRouter()
	router.Use(auth.Middleware(db))

	resolver := &graph.Resolver{DB: db}

	testStuff(db)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: resolver}))

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
