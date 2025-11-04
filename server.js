var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//1. install mongoose and import
var mongoose = require("mongoose");
//connect to the exact database(dont forget to add database name before ?appName)
mongoose.connect(
  "mongodb+srv://faang:hello123@cluster0.l8nf5yw.mongodb.net/faang?appName=Cluster0"
);

var reviewRouter = require("./reviews.route");

app.use("/reviews", reviewRouter);

//define the schema
var studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  gender: String,
});

//declate model //extablish connection to the collection(remember singular plural issue)
var studentModel = mongoose.model("student", studentSchema);

app.get("/getAllStudents", (req, res) => {
  //call the find method with model
  studentModel.find({}).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(3500, () => {
  console.log("Server running on 3500");
});
