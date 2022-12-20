FROM node:16-alpine as build
RUN mkdir -p /app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install cors --save
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist
RUN npm run build --prod

FROM nginxinc/nginx-unprivileged

COPY --from=build ./usr/src/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf/default.conf

# CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
# COPY package.json /app/
# RUN npm install

# COPY . /app/
# RUN npm run build --prod


# FROM nginxinc/nginx-unprivileged:latest
# COPY --from=build /app/dist/trip-scheduling-frontend /usr/share/nginx/html
# RUN touch /tmp/nginx.pid \
#  && chown -R api-gatway:api-gatway /tmp/nginx.pid /cache/nginx
#  COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

# FROM node:latest as builder
# RUN mkdir -p /app
# WORKDIR /app
# COPY . .
# RUN npm install

# CMD ["npm", "start"]
