FROM node:14.20.1-alpine

WORKDIR ./opt/server
ADD . .
RUN yarn install --silent && yarn start
