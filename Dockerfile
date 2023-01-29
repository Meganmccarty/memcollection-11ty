ARG TAG=19.4.0-alpine
FROM node:$TAG
RUN apk update && apk add bash
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
CMD ["/bin/bash"]