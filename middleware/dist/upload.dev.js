"use strict";

var multer = require("multer");

var path = require("path");

var express = require("express"); //set storage engine


var storage = multer.diskStorage({
  destination: "./public/image/",
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000
  },
  fileFilter: function fileFilter(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("myfile"); // Check File Type

function checkFileType(file, cb) {
  // Allowed ext
  var filetypes = /jpeg|jpg|png|gif/; // Check ext

  var extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check mime

  var mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

module.exports = upload;