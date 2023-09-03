import mongoose, { Schema, Document } from "mongoose";
import { IKid } from "./Kid";

export interface IParent extends Document {
  username: string;
  email: string;
  password: string;
  kids?: IKid[];
  userType: "Parent";
}

const parentSchema = new Schema<IParent>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  kids: [{ type: Schema.Types.ObjectId, ref: "Kid" }],
});

export default mongoose.model<IParent>("Parent", parentSchema);
