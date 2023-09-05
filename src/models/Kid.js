const mongoose = require("mongoose");
const { Schema } = mongoose;



const kidSchema = new Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  licturesDates: [{ type: Date }],
});

module.exports = mongoose.model("Kid", kidSchema);
