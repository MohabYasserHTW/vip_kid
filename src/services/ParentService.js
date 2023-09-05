const Parent = require("../models/Parent");
const HttpError = require("../models/HttpError");
const bcrypt = require("bcrypt");


async function registerUser(
  username,
  email,
  password
) {
  try {
    const encryptedPW = await bcrypt.hash(password, 10);
    const newUser = new Parent({ username, email, password: encryptedPW });

    return await newUser.save();
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
}

async function loginUser(userName,password){
  try {
    const parent = await Parent.findOne({username:userName})

    if(!parent){
      throw new HttpError("no user found by this credentials ",401)
    }

    const pwComparison = await bcrypt.compare(password, parent.password)

    if(!pwComparison){
      throw new HttpError("wrong password", 401)
    }

    return  parent 
  } catch (error) {
    throw new HttpError(error.message, error.code || 501);
  }
}


module.exports = { registerUser, loginUser };
