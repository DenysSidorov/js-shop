const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const UserTest = mongoose.model("UserTest", userSchema);

module.exports.saveUser = function (user) {
  const newUser = new UserTest(user);
  newUser.save(function(err, result) {
    if (err) return console.error(err);
    console.log("newUser response", result);
  });
}
