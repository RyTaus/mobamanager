package auth

import (
	"context"
	"database/sql"
	"log"
	"net/http"
	"net/http/httputil"

	"github.com/rytaus/mobamanager/server/graph/model"
)

// A private key for context that only this package can access. This is important
// to prevent collisions between different context uses
var userCtxKey = &contextKey{"user"}

type contextKey struct {
	name string
}

// Wrap the requests we get with this function. Basically, tries to set a field in ctx to
// hold the current user.
func Middleware(db *sql.DB) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			log.Printf("ZUGZUG 1")
			bytes, err := httputil.DumpRequest(r, true)
			log.Printf(string(bytes))
			// panic(formatRequest(r))
			// get the token from the request.
			token, err := getTokenFromRequest(r)
			if err != nil {
				// we arent logged in. nothing to add to context.
				next.ServeHTTP(w, r)
				return
			}
			log.Printf("ZUGZUG 2")

			user, err := getUserFromToken(db, token)
			if err != nil {
				// invalid cookie. route them to login?
				http.Error(w, "Invalid Cookie", http.StatusForbidden)
				return
			}
			// could grab the user so add it to the context for whatever function was called.
			ctx := context.WithValue(r.Context(), userCtxKey, user)
			log.Printf("ZUGZUG 3")

			// call the function this wraps.
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
		})
	}
}

// Get the user logged in, otherwise nil.
func GetUserFromContext(ctx context.Context) *model.User {
	raw, _ := ctx.Value(userCtxKey).(*model.User)
	return raw
}

// not sure if token is a string or an int. get them from db/cache or whatever.
func getUserFromToken(db *sql.DB, token string) (*model.User, error) {
	return &model.User{ID: 154}, nil
}

func getTokenFromRequest(r *http.Request) (string, error) {
	// This should extract the token out of wherever it is stored in the request.
	return "0", nil
}
