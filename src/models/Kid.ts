import mongoose, { Schema, Document } from "mongoose";

export interface IKid extends Document {
  username: string;
  age: number;
  licturesDates?: Date[];
  userType: "Kid";
}

const kidSchema = new Schema<IKid>({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  licturesDates: [{ type: Date }],
});

export default mongoose.model<IKid>("Kid", kidSchema);
