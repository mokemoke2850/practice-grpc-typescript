.PHONY: generate-grpc, start-server, start-client, start-all
.DEFAULT_GOAL := help

generate-grpc: ## generate gRPC code
	@export PATH='$$(PATH):$$(go env GOPATH)/bin'
	cd src/api && \
	protoc --go_out=../pkg/grpc --go_opt=paths=source_relative \
	--go-grpc_out=../pkg/grpc --go-grpc_opt=paths=source_relative \
	*.proto
start-server: ## start gRPC server
	cd src/cmd/server && \
	go run main.go
start-client: ## start gRPC client
	cd src/cmd/client && \
	go run main.go
start-all: ## start gRPC server and client
	make start-server & \
	make start-client
	ps aux | grep -E "make start-server$$" | awk '{print $$2}' | xargs kill 
	ps aux | grep -E "/exe/main$$" | awk '{print $$2}' | xargs kill
	
help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'