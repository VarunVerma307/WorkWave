import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import applicationRouter from './routes/applicationRouter.js'
import jobRouter from './routes/jobRouter.js'
import userRouter from './routes/userRouter.js'
import { dbConnection } from "./database/databaseConnection.js";
import {errorMiddleware} from './middlewares/error.js'

const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(
    cors({
      origin: 'http://localhost:5173' ,
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
      allowedHeaders:['Content-Type','Authorization']
    })
  );
app.options('*', cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);
dbConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

app.use(errorMiddleware)

export default app;