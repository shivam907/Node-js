const express = require("express");
const controller = require("../controllers/getUsers");

const routers = express.Router();

module.exports = routers.post("/users", controller);
