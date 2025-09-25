FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:stable-alpine
COPY --from=build /app/dist/<app-name> /usr/share/nginx/html
EXPOSE 80
