FROM node:16.13-alpine as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /var/www
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]