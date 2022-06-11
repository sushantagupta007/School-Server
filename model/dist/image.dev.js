"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var imageSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100
  },
  gender: {
    type: String,
    "enum": ["M", "F"]
  },
  age: {
    type: String
  },
  bloodGroup: {
    type: Number,
    max: 4,
    min: 2
  },
  classNo: {
    type: Number,
    required: true,
    min: 1,
    max: 255
  },
  admissionYear: {
    type: Number,
    required: true,
    min: 4
  },
  guardian: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  thana: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  district: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  houseNo: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  village: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  mobile: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  id: {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  file: String
});
module.exports = mongoose.model("ImageSchema", imageSchema);