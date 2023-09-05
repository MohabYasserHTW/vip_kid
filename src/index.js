
const express = require("express")
const mongoose = require("mongoose");
const ErrorHandeler  = require("./middlewares/ErrorHandeler");
const envVariables = require("./config/env");
const authRoutes = require("./routes/AuthRoutes");
const { errors, success } = require("./config/constants");


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
