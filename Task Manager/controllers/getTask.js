const Task = require("../models/Task");

module.exports = (req, res, next) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      return res.send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  //   res.send("Testing bro");
};
