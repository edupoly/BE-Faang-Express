var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  role: String,
  phoneNumber: Number,
  emailId: String,
});

var UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
