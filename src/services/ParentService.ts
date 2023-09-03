import Parent, { IParent } from "./../models/Parent";
import HttpError from "../models/HttpError";
import bcrypt from "bcrypt";

async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<IParent> {
  try {
    const encryptedPW = await bcrypt.hash(password, 10);
    const newUser = new Parent({ username, email, password: encryptedPW });

    return await newUser.save();
  } catch (error: any) {
    throw new HttpError(error.message, 500);
  }
}

async function loginUser(userName:string,password:string): Promise<IParent>{
  try {
    const parent = await Parent.findOne({username:userName})

    if(!parent){
      throw new HttpError("no user found by this credentials ",401)
    }

    const pwComparison = await bcrypt.compare(password, parent.password)

    if(!pwComparison){
      throw new HttpError("wrong password", 401)
    }

    return  parent as IParent
  } catch (error: any) {
    throw new HttpError(error.message, error.code || 501);
  }
}


export default { registerUser, loginUser };
