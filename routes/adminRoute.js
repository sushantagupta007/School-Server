const express = require("express");

const {
  registerStudent,
  getData,
  imageUpload,
} = require("../controller/adminController");

const upload = require("../middleware/upload");

const router = express.Router();

router.post("/student_register", upload, registerStudent);

router.route("/student_info").get(getData);
module.exports = router;
