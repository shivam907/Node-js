const express = require("express");
const controller = require("../controllers/getTask");
const routers = express.Router();

const postRoutes = routers.post("/tasks", controller.postTasks);

const getRoutes = routers.get("/tasks", controller.getTasks);

module.exports = { postRoutes, getRoutes };
