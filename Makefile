install_deps:
	yarn add -D graphql @graphql-codegen/cli
	yarn install
	pushd server
	go get github.com/99designs/gqlgen
	popd

gen_client:
	yarn run gen_client

gen_server:
	rm -rf server/schema
	rm -rf server/graph/schema.resolvers.go
	mkdir -p server/schema
	cp -r schema/ server/schema/
	cd server/
	go generate ./...
	cd ..
	rm -r server/schema

clean:
	rm -rf server/schema-copy
