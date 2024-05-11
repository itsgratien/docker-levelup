FROM node:20-alpine

WORKDIR /app

RUN npm install --global nodemon

COPY package.json /app/

RUN npm install

COPY . .


EXPOSE 4000

CMD [ "npm", "run", "dev" ]