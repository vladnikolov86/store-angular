FROM node:17-alpine as build
WORKDIR /app
RUN npm install -g @angular/cli@13.0.0
COPY ./package.json .
RUN npm install
COPY . .
RUN ng build
FROM node:17-alpine as runtime
COPY --from=build /app/dist/ /app/dist
RUN npm install -g http-server
WORKDIR /app/dist/task-store
CMD ["http-server", "-p 4200"]
