// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
// const routes = require("./routes/main");
// app.use(routes);
// const fetch = require("node-fetch");
// import fetch from "node-fetch";
// const data = {
//   key: "b7cca735c2ac09a4a39b38feac141f39",
//   q: "https://youtu.be/0x5fmz5Tjtc",
// };

// const apiData = fetch("https://api.linkpreview.net", {
//   method: "POST",
//   mode: "cors",
//   body: JSON.stringify(data),
// });

// console.log(apiData);
import fetch from "node-fetch";

const fetchData = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it

  const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

  console.log(country); // Columbia's data will be logged to the dev console
};

fetchData();
// app.listen(5000);
