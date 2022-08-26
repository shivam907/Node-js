const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("In the Another middleware");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
