FROM node:18.19.1-bookworm-slim as base
WORKDIR /src
RUN npm install -g npm@9.8.0

FROM base as dev
ENV NODE_ENV development
COPY ./next/package*.json ./
RUN npm install

