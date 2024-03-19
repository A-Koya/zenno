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
install-next:
	docker compose -f docker-compose.next.yml run --rm installer
install-go:
	docker compose -f docker-compose.go.yml run --rm install
exec-sql:
	docker exec -it postgres psql -U root -d postgres
rm-volume:
	docker volume rm zenno_postgres_volume