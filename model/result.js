const mongoose = require("mongoose");
const { Schema } = mongoose;

const result = new Schema({
  student: {
    type: String,

    min: 2,
    max: 100,
  },
  id: {
    type: String,
  },
  bangla: {
    type: String,
  },
  english: {
    type: String,
  },
  math: {
    type: String,
  },
  science: {
    type: String,
  },
  socialscience: {
    type: String,
  },
  gk: {
    type: String,
  },
  it: {
    type: String,
  },
  ct: {
    type: String,
  },
});

module.exports = mongoose.model("result", result);
