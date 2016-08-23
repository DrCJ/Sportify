# Set the base image to Node
FROM node:6.3.1

# File Author / Maintainer
MAINTAINER DJRC

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 80
CMD [ "node", "server/server.js" ]