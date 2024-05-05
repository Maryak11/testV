FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i
COPY . .

ENV PORT=3000

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "node", ".output/server/index.mjs" ]
