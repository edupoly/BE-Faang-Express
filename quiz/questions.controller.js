var QuestionModel = require("./question.model");

async function getAllQuestions(req, res) {
  var data = await QuestionModel.find({});
  res.send(data);
}
async function getAllQuestionsByCategory(req, res) {
  var data = await QuestionModel.find({ category: req.params.category }).limit(
    3
  );
  data = data.map((question) => {
    question.options = [...question.incorrectAnswers];
    var i = parseInt(Math.random(5) * 100) % 4;
    question.options.splice(i, 0, question.correctAnswer);
    question.selectedOption = "";
    return {
      _id: question._id,
      options: question.options,
      selectedOption: "",
      question: question.question,
    };
  });
  res.send(data);
}
async function evaluateQuiz(req, res) {
  // console.log(req.body);
  ids = req.body.map((q) => q._id);
  const answerKey = await QuestionModel.find({ _id: { $in: ids } });
  const answerSheet = answerKey.map((q) => {
    // console.log(q);
    return req.body.find((que) => {
      console.log(que._id, q._id.toString());
      if (que._id === q._id.toString()) {
        que.correctAnswer = q.correctAnswer;
        return true;
      }
    });
  });
  console.log(answerSheet);
  res.send(answerSheet);
}
async function getAllCategories(req, res) {
  var data = await QuestionModel.distinct("category");
  res.send(data);
}
// async function addLead(req, res) {
//   var newLead = new LeadModel(req.body);
//   await newLead.save();
//   res.send("New Lead added");
// }

// function updateLeadByPhoneNumber(req, res) {
//   LeadModel.findOneAndUpdate(
//     { phonenumber: req.params.phonenumber },
//     { $set: { ...req.body } }
//   ).then((data) => {
//     res.send(data);
//   });
// }

// function updateLeadFeedback(req, res) {
//   var feedback = { text: req.body.text, timeStamp: Date.now() };
//   LeadModel.findOneAndUpdate(
//     { phonenumber: req.params.phonenumber },
//     { $push: { feedback: { ...feedback } } }
//   ).then((data) => {
//     res.send(data);
//   });
// }
// function deleteLead(req, res) {
//   LeadModel.findOneAndDelete({ phonenumber: req.params.phonenumber }).then(
//     (data) => {
//       res.send(data);
//     }
//   );
// }
module.exports = {
  evaluateQuiz,
  getAllQuestions,
  getAllQuestionsByCategory,
  getAllCategories,
  // addLead,
  // updateLeadByPhoneNumber,
  // updateLeadFeedback,
  // deleteLead,
};
