// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
package graph

import (
	"context"

	"github.com/rytaus/mobamanager/server/graph/generated"
	"github.com/rytaus/mobamanager/server/graph/model"
)

func (r *queryResolver) User(ctx context.Context) (*model.User, error) {
	user := &model.User{
		ID:       0,
		Username: "ryan",
		Password: "password"}
	return user, nil
}

func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
