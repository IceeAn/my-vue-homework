FROM node:lts-alpine

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

RUN npm install -g serve
CMD ["npx", "serve", "-s", "dist", "-l", "8080"]
