server: install_deps gen_server

install_deps:
	. ./install_deps.sh

gen_client:
	yarn run gen_client

gen_server:
	. ./gen_server.sh
	
clean:
	rm -rf server/schema-copy
