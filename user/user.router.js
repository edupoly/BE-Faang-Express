var express = require("express");
const { login, registerUser } = require("./user.controller");
var router = express.Router();

router.post("/login", login);
router.post("/registerUser", registerUser);
module.exports = router;
