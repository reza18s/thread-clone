import express, { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "./util/ErrorHandler";
import { globalErrorHandler } from "./controllers/errorController";
import helmet, { xssFilter } from "helmet";
import userRouter from "./routes/userRoutes";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookiesParser from "cookie-parser";
import messageRoutes from "./routes/messageRoutes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
// app.use(express.json());
app.use(cookiesParser());
configDotenv({ path: "./config.env.local" });
// eslint-disable-next-line prefer-destructuring
const DB = process.env.DB;
mongoose
  .connect(DB)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("mongodb is connected");
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
app.use((req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log(req.method, req.path);
  next();
});
app.use(helmet());
app.use(xssFilter());
app.use(express.static(`${__dirname}/public`));

// // // 3) ROUTES
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/users", userRouter);
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
// 4) START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}...`);
});
