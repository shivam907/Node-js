// const express = require("express");
// const router = express.Router();
// const controller = require("../controller/main");

// router.get("/", controller);

// module.exports = router;

import fetch from "node-fetch";
const data = {
  key: "b7cca735c2ac09a4a39b38feac141f39",
  q: "https://youtu.be/0x5fmz5Tjtc",
};

const apiData = fetch("https://api.linkpreview.net", {
  method: "POST",
  mode: "cors",
  body: JSON.stringify(data),
});

module.exports = apiData;
