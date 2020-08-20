# make a new container
up-app:
	docker-compose up -d --force-recreate app
up-server:
	docker-compose up -d --force-recreate server

up: up-app up-server


# show logs in the container
logs:
	docker-compose logs -f

# load dependencies into the node_modules folder via temporary container
install-app:
	docker-compose run --rm app "npm install"
install-server:
	docker-compose run --rm server "npm install"

install: install-app install-server


into-app:
	docker-compose exec app bash
into-server:
	docker-compose exec server bash

# files created by docker container are belong to root user
# we have to unrootify in order to make it writable
unrootify:
	sudo chown -R $$(id -u):$$(id -g) .