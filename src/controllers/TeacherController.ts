import { Request, Response, NextFunction } from "express";
import TeacherService from "../services/TeacherService";
import AuthService from "../services/AuthService";

async function register(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { username, email, password } = req.body;
    const newUser = await TeacherService.registerUser(
      username,
      email,
      password
    );
    const token = AuthService.createToken({
      userId: newUser._id,
      userName: newUser.username,
      userType: newUser.userType,
    });

    res.status(201).json({ newUser, token });
  } catch (err) {
    return next(err);
  }
}

async function login(req: Request, res: Response, next: NextFunction):Promise<void> {
  try{
    const { username, email, password } = req.body;
    const parent = await TeacherService.loginUser(username,password)
    const token = AuthService.createToken({
      userId: parent._id,
      userName: parent.username,
      userType: parent.userType
    })

    res.status(201).json({parent, token})
  }catch(err){
    return next(err)
  }
}

export default { register };
