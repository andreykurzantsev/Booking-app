FROM node:16.15.0

WORKDIR /app/api

COPY . .

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]