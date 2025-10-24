var express = require("express");
var app = express();
var fs = require("fs");
var jwt = require("jsonwebtoken");
var cors = require("cors");
var bodyParser = require("body-parser");
var todoRouter = require("./todos.router");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  var users = JSON.parse(fs.readFileSync("users.txt").toString());
  console.log(users);
  var f = users.find((user) => {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      return true;
    }
  });
  if (f) {
    const token = jwt.sign(req.body, "evariki cheppanu");
    res.send({ msg: "ok", token });
  } else {
    res.send({ msg: "invalid" });
  }
});

// app.use((req, res, next) => {
//   //if token is valued then next()
//   try {
//     jwt.verify(req.headers.token, "evariki cheppanu");
//     next();
//   } catch (e) {
//     res.send({ msg: "Login again" });
//   }

//   //else respond login first
// });

app.use("/todos", todoRouter);

app.delete("/deleteStudent/:id", (req, res) => {
  console.log("deleteStudent endpoint executed");
  const { id } = req.params;
  var students = JSON.parse(fs.readFileSync("students.txt").toString());
  var filteredStudents = students.filter((student) => {
    if (student._id != id) {
      return true;
    }
  });
  fs.writeFileSync("students.txt", JSON.stringify(filteredStudents));
  res.send("Aagura nayana delete chesthanu");
});
app.get("/getEmployeeDetailsById/:id", (req, res) => {
  const { id } = req.params;
  var employees = JSON.parse(fs.readFileSync("employees.txt").toString());
  var employees = employees.find((employee) => {
    if (employee.id == id) {
      return true;
    }
  });
  res.send(employees);
});
app.put("/updateEmployee", (req, res) => {
  var employees = JSON.parse(fs.readFileSync("employees.txt").toString());
  var employees = employees.map((employee) => {
    if (employee.id == req.body.id) {
      return req.body;
    }
    return employee;
  });
  fs.writeFileSync("employees.txt", JSON.stringify(employees));
  res.send({ msg: "UPDATED" });
});
app.get("/products", (req, res) => {
  fs.readFile("products.txt", (err, buf) => {
    if (err) {
      console.log("error vachadu");
    } else {
      res.send(buf.toString());
    }
  });
});
app.get("/getProductById/:id", (req, res) => {
  var timestamp = Math.random() * 10000;
  console.log(timestamp);
  setTimeout(() => {
    var products = JSON.parse(fs.readFileSync("products.txt").toString());
    res.send(products.find((product) => product.id == req.params.id));
  }, timestamp);
});
app.get("/employees", (req, res) => {
  console.log("Helo");
  var buf = fs.readFileSync("employees.txt");
  var data = buf.toString();
  res.send(data);
});
app.get("/students", (req, res) => {
  var buf = fs.readFileSync("students.txt");
  var data = buf.toString();
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("Hello Praveen");
});

app.listen(3500, () => {
  console.log("Server running on 3500");
});
// http methods : GET POST PUT DELETE (CRUD)
