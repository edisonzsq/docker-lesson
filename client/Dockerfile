FROM node:18-alpine

WORKDIR /fe-app

COPY ./client ./

RUN npm ci

CMD ["npm", "start"]