FROM node:14.20.1-alpine

WORKDIR ./opt/front
ADD . .
RUN yarn install && yarn run build
