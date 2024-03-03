FROM node:14.20.1 as default

WORKDIR /usr/app/front
COPY ./front /usr/app/front
RUN npm install
EXPOSE 4000
FROM default as dev

WORKDIR /usr/app/server/
COPY ./server /usr/app/server/
RUN yarn
EXPOSE 4100
FROM default as prod
ENV NODE_ENV=production
