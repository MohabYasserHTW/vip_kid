const mongoose = require("mongoose");
const { Schema } = mongoose;




const parentSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  kids: [{ type: Schema.Types.ObjectId, ref: "Kid" }],
});

module.exports = mongoose.model("Parent", parentSchema);
