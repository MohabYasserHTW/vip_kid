import { CustomError } from "../models/HttpError";
import express, { Request, Response, NextFunction } from "express";

export const ErrorHandeler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  } else {
    console.log(err);
    res.status(err.code);
    res.json({ err: { message: err.message, code: err.code } });
  }
};
