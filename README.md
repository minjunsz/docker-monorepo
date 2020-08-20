## Mono-repo Boilerplate
### 1. Initialize project directories
* Initialize create-react-app with temporary container
```
docker run --rm -it -v "$(pwd):/temp" --workdir "/temp" node bash -c "npx create-react-app app --template typescript"
```
* Initialize npm server with temporary container
```
docker run --rm -it -v "$(pwd)/server:/temp" --workdir "/temp" node npm init -y
```

### 2. Write codes for docker-compose
### 3. If I want to add dependencies, connect to docker container and use npm commands
### 4. Add docker commands in Makefile