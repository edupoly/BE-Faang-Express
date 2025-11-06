var express = require("express");
var router = express.Router();
const questionController = require("./questions.controller");

router.get("/getAllQuestions", questionController.getAllQuestions);
router.get(
  "/getAllQuestionsByCategory/:category",
  questionController.getAllQuestionsByCategory
);
router.get("/getAllCategories", questionController.getAllCategories);

router.post("/evaluate", questionController.evaluateQuiz);
// router.post("/addNewLead", leadController.addLead);

// router.put("/updateLead/:phonennumber", leadController.updateLeadByPhoneNumber);

// router.put(
//   "/updateLeadFeedback/:phonenumber",
//   leadController.updateLeadFeedback
// );

// router.delete("/deleteLead/:phonenumber", leadController.deleteLead);

module.exports = router;
