import express, { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "./util/ErrorHandler";
import { globalErrorHandler } from "./controllers/errorController";
import helmet, { xssFilter } from "helmet";
import userRouter from "./routes/userRoutes";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

configDotenv({ path: "./config.env" });
app.use(helmet());
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
app.use(xssFilter());
app.use(express.static(`${__dirname}/public`));

// // // 3) ROUTES
app.use("/api/v1/users", userRouter);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
   res.status(200).json({ stats: "s" });
});
app.use(globalErrorHandler);
app.all("*", (req: Request, res: Response, next: NextFunction) => {
   next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});
// 4) START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
   // eslint-disable-next-line no-console
   console.log(`App running on port ${port}...`);
});
