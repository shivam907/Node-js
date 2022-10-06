const express = require("express");
const controller = require("../controllers/getTask");

const routers = express.Router();
module.exports = routers.post("/tasks", controller);
