FROM node:buster as builder

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/ims /usr/share/nginx/html
