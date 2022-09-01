const express = require("express");

const app = express();
const path = require("path");

const postRouter = require("./routes/feed");
app.use(postRouter);

app.listen(8000);
