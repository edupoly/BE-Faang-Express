var mongoose = require("mongoose");
var questionSchema = mongoose.Schema({
  category: String,
  id: String,
  correctAnswer: String,
  incorrectAnswers: Array,
  question: Object,
  tags: Array,
  type: String,
  difficulty: String,
  regions: Array,
  isNiche: Boolean,
});

var QuestionModel = mongoose.model("question", questionSchema);
module.exports = QuestionModel;
