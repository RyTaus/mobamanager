install_deps:
	yarn add -D graphql @graphql-codegen/cli
	yarn install

gen_client:
	yarn run gen_client