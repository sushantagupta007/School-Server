const multer = require("multer");
const path = require("path");
const express = require("express");

//set storage engine
const storage = multer.diskStorage({
  destination: "./public/pdf/",
  filename: function (req, file, cb) {
    cb(null, file.originalname + path.extname(""));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}
module.exports = upload;
