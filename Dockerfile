FROM node:10-alpine as build-app

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-app /app/dist/smart-pot-client /usr/share/nginx/html
