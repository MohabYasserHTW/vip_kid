const Kid = require("../models/Kid");
const HttpError = require("../models/HttpError");


async function registerUser(username, age) {
  try {
    const newUser = new Kid({ username, age });

    return await newUser.save();
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
}

module.exports = { registerUser };
