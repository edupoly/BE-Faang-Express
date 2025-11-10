var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongooseConnection = require("./mongodbconnection");
var LeadRouter = require("./leads/leads.router");
var QuizRouter = require("./quiz/questions.router");
var UserRouter = require("./user/user.router");
app.use(cors());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

app.use("/user", UserRouter);
app.use("/leads", LeadRouter);
app.use("/quiz", QuizRouter);

app.listen(3500, () => {
  console.log("Server running on 3500");
});
