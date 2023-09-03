import express from "express";
import mongoose from "mongoose";
import { ErrorHandeler } from "./middleware/ErrorHandeler";
import envVariables from "./config/env";
import authRoutes from "./routes/AuthRoutes";
import { errors, success } from "./config/constants";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(ErrorHandeler);

mongoose
  .connect(envVariables.dbUrl)
  .then(() =>
    app.listen(envVariables.port, () => {
      console.log(success.dbConnected + " " + envVariables.port);
    })
  )
  .catch((err) => {
    console.log(errors.dbFailed);
  });
