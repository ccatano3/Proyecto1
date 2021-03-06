FROM node:8-alpine

WORKDIR /usr/src/comen

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
