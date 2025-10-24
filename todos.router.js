var express = require("express");
var router = express.Router();
var fs = require("fs");
router.get("/getAllTodos", async (req, res) => {
  var todos = JSON.parse((await fs.promises.readFile("todos.txt")).toString());
  res.send(todos);
});
router.get("/getTodosByUsername/:username", async (req, res) => {
  var todos = JSON.parse((await fs.promises.readFile("todos.txt")).toString());
  var userTodos = todos.filter((todo) => {
    if (todo.username === req.params.username) {
      return true;
    }
  });
  res.send(userTodos);
});
router.post("/addTodo", async (req, res) => {
  console.log(req.body);
  var todos = JSON.parse((await fs.promises.readFile("todos.txt")).toString());
  todos.push(req.body);
  await fs.promises.writeFile("todos.txt", JSON.stringify(todos));
  res.send("data added");
});
module.exports = router;
