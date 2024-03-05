FROM golang:1.21.7-alpine3.19 as base
WORKDIR /src
RUN apk update && apk add git

FROM base as dev
RUN apk add bash
COPY ./go/go.mod ./go/go.sum ./
RUN go mod download && go mod tidy