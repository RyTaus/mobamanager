rm -rf server/schema
cp -r schema server/schema
cd server/
go generate ./...
cd ..
rm -r server/schema
