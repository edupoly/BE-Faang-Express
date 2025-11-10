const UserModel = require("./user.model");
const jwt = require("jsonwebtoken");

function registerUser(req, res) {
  var newuser = new UserModel(req.body);
  newuser.role = "Student";
  newuser.save();
  res.send({ msg: "RegistrationSuccess" });
}

function login(req, res) {
  console.log(req.body);
  UserModel.find({
    username: req.body.username,
    password: req.body.password,
  }).then((rep) => {
    if (rep.length == 0) {
      res.send({ msg: "Wrong Credentials" });
    } else {
      var token = jwt.sign(
        { username: rep.username, role: rep.role },
        "shh gupchup"
      );

      res.send({
        msg: "Success",
        token: token,
        username: rep[0].username,
        role: rep[0].role,
      });
    }
  });
}

module.exports = { login, registerUser };
