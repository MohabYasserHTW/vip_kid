const mongoose = require("mongoose");
const { Schema } = mongoose;





const teacherSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avilabelDates: [{ type: Date }],
  bookedDates: [{ type: Date }],
  students: [{ type: Schema.Types.ObjectId, ref: "Kid" }],
});

module.exports = mongoose.model("Teacher", teacherSchema);
