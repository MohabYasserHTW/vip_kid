import mongoose, { Schema, Document } from "mongoose";
import { IKid } from "./Kid";

export interface ITeacher extends Document {
  username: string;
  email: string;
  avilabelDates?: Date[];
  bookedDates?: Date[];
  password: string;
  students?: IKid[];
  userType: "Teacher";
}

const teacherSchema = new Schema<ITeacher>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avilabelDates: [{ type: Date }],
  bookedDates: [{ type: Date }],
  students: [{ type: Schema.Types.ObjectId, ref: "Kid" }],
});

export default mongoose.model<ITeacher>("Teacher", teacherSchema);
