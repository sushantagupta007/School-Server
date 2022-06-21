"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var imageSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 100
  },
  gender: {
    type: String,
    "enum": ["M", "F"]
  },
  age: {
    type: String,
    "enum": ["C", "T", "A"]
  },
  bloodGroup: {
    type: String,
    "enum": ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]
  },
  classNo: {
    type: Number,
    min: 1,
    max: 255
  },
  admissionYear: {
    type: Number,
    min: 4
  },
  guardian: {
    type: String,
    max: 255,
    min: 2
  },
  email: {
    type: String,
    max: 255,
    min: 2
  },
  thana: {
    type: String,
    max: 255,
    min: 2
  },
  district: {
    type: String,
    max: 255,
    min: 2
  },
  houseNo: {
    type: String,
    max: 255,
    min: 2
  },
  village: {
    type: String,
    max: 255,
    min: 2
  },
  mobile: {
    type: Number
  },
  id: {
    type: String,
    max: 255,
    min: 2
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("ImageSchema", imageSchema);