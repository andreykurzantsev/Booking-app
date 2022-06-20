FROM node:16.15.0

WORKDIR /app/client

COPY . .

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]