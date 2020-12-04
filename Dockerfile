FROM node:10-alpine as build-app
RUN mkdir -p /smart-pot-client
WORKDIR /smart-pot-client
COPY package.json /smart-pot-client
RUN npm install
COPY . /smart-pot-client
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-app /smart-pot-client/dist/smart-pot-client /usr/share/nginx/html
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
