#stage 1
FROM node:16.13.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/greatest-beverage /usr/share/nginx/html