
const HttpError = require("../models/HttpError");
const AuthService = require("../services/AuthService");




 const verify = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    let token;
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


module.exports = verify