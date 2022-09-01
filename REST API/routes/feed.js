const express = require("express");

const router = express.Router();

router.get("/posts", (req, res, next) => {
  res
    .status(200)
    .json({ posts: [{ title: "first post", content: "this is a post" }] });
});

module.exports = router;
