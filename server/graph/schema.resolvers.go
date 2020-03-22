// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
package graph

import (
	"context"
	"fmt"
	"log"

	"github.com/rytaus/mobamanager/server/auth"
	"github.com/rytaus/mobamanager/server/crud"
	"github.com/rytaus/mobamanager/server/graph/generated"
	"github.com/rytaus/mobamanager/server/graph/model"
)

func (r *queryResolver) User(ctx context.Context) (*model.User, error) {
	user := auth.GetUserFromContext(ctx)
	log.Printf(string(user.ID))
	return user, nil
}

func (r *queryResolver) SignUp(ctx context.Context, username string, password string) (*model.User, error) {
	user := crud.NewUser(r.DB, username, password)
	return user, nil
}

func (r *queryResolver) LogIn(ctx context.Context, username string, password string) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
