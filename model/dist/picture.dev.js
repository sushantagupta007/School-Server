"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var pictureSchema = new Schema({
  fileName: {
    type: String
  },
  filePath: {
    type: String
  },
  fileType: {
    type: String
  },
  fileSize: {
    type: String
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("picture", pictureSchema);