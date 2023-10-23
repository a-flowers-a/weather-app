FROM node:16.18.0-alpine AS reactbuild

WORKDIR /weather-app

COPY package-lock.json /weather-app/

COPY package.json /weather-app/

RUN npm install

COPY . /weather-app/

RUN npm run build

#Nginx Server build 
FROM nginx:stable-alpine

COPY --from=reactbuild /weather-app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]