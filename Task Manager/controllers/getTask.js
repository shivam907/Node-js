const Task = require("../models/Task");

const postTasks = (req, res, next) => {
  const task = new Task(req.body);
  task.save().then(() => {
    return res.send(task);
  });
  //   res.send("Testing bro");
};

const getTasks = (req, res, next) => {
  Task.find({}).then((tasks) => {
    res.send(tasks);
  });
};

module.exports = { postTasks, getTasks };
