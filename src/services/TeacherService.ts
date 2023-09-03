import Teacher, { ITeacher } from "./../models/Teacher";
import HttpError from "../models/HttpError";
import bcrypt from "bcrypt";

async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<ITeacher> {
  try {
    const encryptedPW = await bcrypt.hash(password, 10);
    const newUser = new Teacher({ username, email, password: encryptedPW });
    return await newUser.save();
  } catch (error: any) {
    throw new HttpError(error.message, 500);
  }
}

async function loginUser(userName:string,password:string): Promise<ITeacher>{
  try {
    const teacher = await Teacher.findOne({username:userName})

    if(!teacher){
      throw new HttpError("no user found by this credentials ",401)
    }

    const pwComparison = await bcrypt.compare(password, teacher.password)

    if(!pwComparison){
      throw new HttpError("wrong password", 401)
    }

    return  teacher as ITeacher
  } catch (error: any) {
    throw new HttpError(error.message, error.code || 501);
  }
}

export default { registerUser, loginUser };
