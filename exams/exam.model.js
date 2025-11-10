var mongoose = require("mongoose");
var examSchema = mongoose.Schema({
  username: String,
  timeStamp: Date,
  QueAns: Array,
});

var ExamModel = mongoose.model("exam", examSchema);
module.exports = ExamModel;
