import { Request, Response, NextFunction } from "express";
import KidService from "../services/KidService";
import { ICustomReq } from "../middleware/Verify";

async function register(
  req: ICustomReq,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { username, age } = req.body;
    const newUser = await KidService.registerUser(username, age);

    res.status(201).json(newUser);
  } catch (err) {
    return next(err);
  }
}

export default { register };
