import express, { NextFunction, Request, Response } from "express";
import AppError from "./errors/AppError";
import routes from "./routes";


import "@shared/typeorm";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(routes);
app.use(express.json());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen(port, () => {
  console.log("porta aberta!");
});
