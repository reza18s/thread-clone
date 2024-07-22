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
import path from "path";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,

    optionsSuccessStatus: 200,
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
if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

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
