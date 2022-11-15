const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const obj = {
  status: "",
  message: "",
  result: "",
};

function createObj(status, name, a, b) {
  if (Number(a) !== NaN && Number(b) !== NaN) {
    (a = Number(a)), (b = Number(b));
    obj.status = status === 200 ? "Success" : "Failure";
    obj.message = `The ${name} of given two numbers`;
    if (name === "sum") {
      let result = a + b;
      if (result < -1000000) {
        return "Underflow";
      } else if (result > 1000000) {
        return "Overflow";
      } else {
        obj.result = result;
      }
    } else if (name === "difference") {
      let result = a - b;
      if (result < -1000000) {
        return "Underflow";
      } else if (result > 1000000) {
        return "Overflow";
      } else {
        obj.result = result;
      }
    } else if (name === "product") {
      let result = a * b;
      if (result < -1000000) {
        return "Underflow";
      } else if (result > 1000000) {
        return "Overflow";
      } else {
        obj.result = result;
      }
    } else {
      let result = a / b;
      if (b === 0) {
        return "Cannot divide by zero";
      } else if (result < -1000000) {
        return "Underflow";
      } else if (result > 1000000) {
        return "Overflow";
      } else {
        obj.result = result.toFixed(2);
      }
    }
    return obj;
  } else {
    return "Invalid Data Type";
  }
}

app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = createObj(res.statusCode, req.body.btn, num1, num2);
  switch (req.body.btn) {
    case "sum":
      res.send(JSON.stringify(result));
      break;
    case "difference":
      res.send(JSON.stringify(result));
      break;
    case "product":
      res.send(JSON.stringify(result));
      break;
    case "division":
      res.send(JSON.stringify(result));
      break;
    default:
      res.send("Invalid");
      break;
  }
});

app.get("/sub", (req, res) => {
  res.send("Hello");
});

app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
