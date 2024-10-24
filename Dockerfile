FROM node:lts-alpine

WORKDIR /usr/src/app
COPY "package*.json" ./
RUN npm install
COPY . .
EXPOSE 8085
CMD ["npm", "start"]
