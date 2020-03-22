rm -rf server/schema
mkdir -p server/schema
cp -r schema/ server/schema/
cd server/
go generate ./...
cd ..
rm -r server/schema
