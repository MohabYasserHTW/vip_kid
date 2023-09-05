const Teacher = require("../models/Teacher");
const HttpError = require("../models/HttpError");
const bcrypt = require("bcrypt");


async function registerUser(
  username,
  email,
  password
) {
  try {
    const encryptedPW = await bcrypt.hash(password, 10);
    const newUser = new Teacher({ username, email, password: encryptedPW });
    return await newUser.save();
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
}

async function loginUser(userName,password){
  try {
    const teacher = await Teacher.findOne({username:userName})

    if(!teacher){
      throw new HttpError("no user found by this credentials ",401)
    }

    const pwComparison = await bcrypt.compare(password, teacher.password)

    if(!pwComparison){
      throw new HttpError("wrong password", 401)
    }

    return  teacher 
  } catch (error) {
    throw new HttpError(error.message, error.code || 501);
  }
}

module.exports = { registerUser, loginUser };
