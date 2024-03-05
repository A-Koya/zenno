up:
	docker-compose up -d
down:
	docker-compose down
build:
	docker-compose build
exec-next:
	docker container exec -it next bash
exec-go:
	docker container exec -it go bash
install-go:
	docker compose -f docker-compose.go.yml run --rm install