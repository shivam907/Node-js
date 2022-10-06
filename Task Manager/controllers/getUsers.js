const User = require("../models/User");

module.exports = (req, res, next) => {
  const user = new User(req.body);
  user.save().then(() => {
    return res.send(user);
  });
  //   res.send("Testing bro");
};
