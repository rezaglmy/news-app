FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn

RUN npm i -g serve

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]