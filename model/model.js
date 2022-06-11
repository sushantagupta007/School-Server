const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const SignUpSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  mobile: {
    type: String,
    required: true,
    min: 11,
  },
  role: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String || Number,
    required: true,
  },
});

SignUpSchema.methods.getJWTToken = function () {
  console.log("hello");
  return jwt.sign(
    // eslint-disable-next-line no-underscore-dangle
    { id: this._id },

    "signupuser"
    // {
    //   expiresIn: process.env.JWT_EXPIRE,
    //   // eslint-disable-next-line comma-dangle
    // }
  );
};
module.exports = mongoose.model("Users", SignUpSchema);
