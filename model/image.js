const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  gender: {
    type: String,
    enum: ["M", "F"],
  },
  age: {
    type: String,
    enum: ["C", "T", "A"],
  },
  bloodGroup: {
    type: Number,
    enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
  },
  classNo: {
    type: Number,
    required: true,
    min: 1,
    max: 255,
  },
  admissionYear: {
    type: Number,
    required: true,
    min: 4,
  },
  guardian: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },

  thana: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  district: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  houseNo: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  village: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  mobile: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  id: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  file: String,
});

module.exports = mongoose.model("ImageSchema", imageSchema);
