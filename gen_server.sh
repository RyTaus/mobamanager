rm -rf server/schema
mkdir -p server/schema
cp -r schema/ server/schema/
cd server/
go generate ./...
cd ..
rm -r server/schema
cd server
go get github.com/99designs/gqlgen
cd ..