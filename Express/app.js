const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  // console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  // console.log("In the Another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body["title"]);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("In the Another middleware");
  res.send("<h1>Hellsso from shivam Express</h1>");
});

app.listen(3000);
