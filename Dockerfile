# syntax = docker/dockerfile:1.0-experimental
ARG BUILD_WORKFLOW
FROM node:15.8.0-alpine AS base

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY pirate-fy/package.json ./

RUN npm install --force
RUN npm install react-scripts@3.4.1 -g

# add app
COPY pirate-fy/src ./src
COPY pirate-fy/public ./public

# run staging/dev app
FROM base as dev
EXPOSE 3000
CMD ["npm", "start"]

# run production app
FROM base as prod
RUN npm run build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]

FROM $BUILD_WORKFLOW as final
