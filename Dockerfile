FROM node:18-alpine

ENV PORT 3000

WORKDIR /app

# Installing dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# Copying source files
COPY . .

EXPOSE 3000

# Running the app
CMD "yarn" "dev"
