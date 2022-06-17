import express  from "express";
import { connectMongo } from './database/connection.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config({ path: 'var.env' });

const app = express();
const PORT = 5000;

app.use(morgan('tiny'));

const startApp = async () => {
    try {
      await connectMongo();
      app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (error) {
      console.log('ERROR');
    }
  };
  startApp();
