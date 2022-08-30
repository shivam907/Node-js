const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const usersRoutes = require("./routes/admin");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
console.log("hello world");

const names = [];

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Home page",
  });
});
app.get("/users", (req, res, next) => {
  res.render("users", {
    title: "Users Page",
    heading: "Users are best",
    name: names[0].title,
  });
});

app.post("/add-users", (req, res, next) => {
  names.push(req.body);
  console.log(names[0].title);
  res.redirect("/users");
});
app.listen("3000");
