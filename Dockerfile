FROM node:17-alpine as build-client
WORKDIR /app
RUN npm install -g @angular/cli@13.0.0
COPY ./package.json .
RUN npm install
COPY . .
RUN ng build
FROM node:17-alpine as build-server
COPY --from=build-client /app/dist/ /app/dist
COPY /server /app/server
WORKDIR /app/server
RUN npm install
CMD ["node", "index"]
