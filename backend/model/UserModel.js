// model/UserModel.js
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model("User", UserSchema); // ✅ NO "new" here

module.exports = { UserModel, UserSchema };
