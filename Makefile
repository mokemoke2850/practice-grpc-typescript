.PHONY: generate-grpc
.DEFAULT_GOAL := help

generate-grpc: ## generate gRPC code
	sh ./generate_from_proto.sh
help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'