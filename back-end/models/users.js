const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  fullname: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  hasAgreed: { type: Boolean, require: true },
  fruits: []
});

const User = mongoose.model("User", userSchema);
module.exports = User;
