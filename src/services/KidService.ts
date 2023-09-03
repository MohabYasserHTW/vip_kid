import Kid, { IKid } from "./../models/Kid";
import HttpError from "../models/HttpError";

async function registerUser(username: string, age: number): Promise<IKid> {
  try {
    const newUser = new Kid({ username, age });

    return await newUser.save();
  } catch (error: any) {
    throw new HttpError(error.message, 500);
  }
}

export default { registerUser };
