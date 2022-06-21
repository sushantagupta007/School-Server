const express = require("express");

const {
  registerStudent,
  getData,
  imageUpload,
  getImage,
} = require("../controller/adminController");

const upload = require("../middleware/upload");

const router = express.Router();

router.post("/student_register", registerStudent);

router.route("/student_info").get(getData);

router.post("/image", upload, imageUpload);
router.route("/getImage").get(getImage);

module.exports = router;
