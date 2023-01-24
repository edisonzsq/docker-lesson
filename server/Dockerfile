FROM node:18-alpine

WORKDIR /be-app

COPY ./server ./

RUN npm ci

CMD ["npm", "run", "dev"]