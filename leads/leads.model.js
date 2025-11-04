var mongoose = require("mongoose");
var leadSchema = mongoose.Schema({
  fullname: String,
  phonenumber: Number,
  email: String,
  course: String,
  programme: String,
  modeOfTraining: String,
  feedback: Array,
  enquiryTimeStamp: Date,
});

var LeadModel = mongoose.model("lead", leadSchema);
module.exports = LeadModel;
