const envVariables = require("../config/env");
const HttpError = require("../models/HttpError");
const jwt = require("jsonwebtoken");

function createToken(payload) {
  try {
    return jwt.sign(payload, envVariables.jwtSecret, { expiresIn: "1h" });
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
}

function verifyToken(token) {
  try {
    return jwt.verify(token, envVariables.jwtSecret)
  } catch (error) {
    throw new HttpError(error.message, 403);
  }
}

module.exports = {
  createToken,
  verifyToken,
};
