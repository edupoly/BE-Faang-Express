var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongooseConnection = require("./mongodbconnection");
var LeadRouter = require("./leads/leads.router");
app.use(cors());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

app.use("/leads", LeadRouter);

app.listen(3500, () => {
  console.log("Server running on 3500");
});
