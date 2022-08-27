const express = require("express");

const path = require("path");

const app = express();

const admin = require("./routers/admin");

app.use(express.static(path.join(__dirname, "public")));

app.use(admin);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});

app.listen(3500);
