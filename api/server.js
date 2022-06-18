import express  from "express";
import { connectMongo } from './database/connection.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser"
dotenv.config({ path: 'var.env' });

const PORT = (process.env.PORT || 5000);
const app = express();

app.use(cookieParser());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next)=>{
  const errorStatus = err.Status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  }); 
});

const startApp = async () => {
    try {
      await connectMongo();
      app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (error) {
      console.log('ERROR');
    }
  };
  startApp();
