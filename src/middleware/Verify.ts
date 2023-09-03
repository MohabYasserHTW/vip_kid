import { Request, Response, NextFunction } from "express";
import HttpError from "../models/HttpError";
import AuthService from "../services/AuthService";

export interface ICustomReq extends Request {
  userData?: {
    userId: string;
    userName: string;
    userType: "Teacher" | "Parent" | "Kid";
  };
}

export const verify = (req: ICustomReq, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    let token: string | undefined;
    token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      next(new HttpError("auth failed no token ", 401));
    }

    const decodedToken = AuthService.verifyToken(token || "");

    if (!decodedToken) {
      next(new HttpError("invalid token", 401));
    }

    req.userData = {
      userId: decodedToken?.userId,
      userName: decodedToken?.userName,
      userType: decodedToken?.userType,
    };
    next();
  } catch {
    return next(new HttpError("auth failed    ", 401));
  }
};
