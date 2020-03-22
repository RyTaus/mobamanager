// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

//go:generate go run github.com/99designs/gqlgen
package graph
<<<<<<< HEAD

type Resolver struct{}
=======

import (
	"database/sql"
)

type Resolver struct {
	DB *sql.DB
}
>>>>>>> f9c1f2b5970c334a511666bcd0d4e1a7ab234bb8
