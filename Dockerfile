# build stage
FROM node:lts-alpine as build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 



# deploy stage
FROM nginx:stable-alpine as deploy
COPY --from=build /src/build /usr/share/nginx/html/
EXPOSE 80
