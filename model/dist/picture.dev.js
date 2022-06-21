"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var pictureSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("picture", pictureSchema);