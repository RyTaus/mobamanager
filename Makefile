install_deps:
	pushd server
	go get github.com/99designs/gqlgen
	popd

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