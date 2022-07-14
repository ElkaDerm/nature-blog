const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS=require("../constans.js")


const userSchema = new mongoose.Schema({
  nameFirst: {
    type: String,
    required: [true, "First name is required!"],
    validate: [/^[a-zA-Z]+$/, "Name should consist only english letters!"],
    minlength: 3,
  },
  nameSecond: {
    type: String,
    required: [true, "Second name is required!"],
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [/^[a-z]+@[a-z]+.[a-z]+$/, "Ivalid email!"],
  },
  password: {
    type: String,
    required: true,
    minlength: [4, "Password must be at least 4 character!"],
  },
  myPosts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
});


const User = mongoose.model("User", userSchema);

module.exports = User;
