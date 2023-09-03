import envVariables from "../config/env";
import HttpError from "../models/HttpError";
import jwt, { JwtPayload } from "jsonwebtoken";

function createToken(payload: Object) {
  try {
    return jwt.sign(payload, envVariables.jwtSecret, { expiresIn: "1h" });
  } catch (error: any) {
    throw new HttpError(error.message, 500);
  }
}

function verifyToken(token: string) {
  try {
    return jwt.verify(token, envVariables.jwtSecret) as JwtPayload;
  } catch (error: any) {
    throw new HttpError(error.message, 403);
  }
}

export default {
  createToken,
  verifyToken,
};
