# mobamanager
Manage a team of esports athletes

## Server Quickstart

```
make server
```

```
cd server
go run server.go
```

## Important Files

### schema/schema.graphql

Queries available in the GraphQL Playground will be shown here.

Currently, only the User Query is available.

### server/server.go

Main entry point into the server

### server/graph/generated/generated.go

Not human-readable... can be ignored...

### server/graph/model/models_gen.go

Models based on the general schema used by Go

### server/graph/resolver.go

Resources (database handle) used by functions in `schema.resolvers.go`

### server/graph/schema.resolvers.go

The server will send queries to the resolver functions here.
