"use strict";

var express = require("express");

var _require = require("../controller/adminController"),
    registerStudent = _require.registerStudent,
    getData = _require.getData,
    imageUpload = _require.imageUpload,
    getImage = _require.getImage;

var upload = require("../middleware/upload");

var router = express.Router();
router.post("/student_register", registerStudent);
router.route("/student_info").get(getData);
router.post("/image", upload, imageUpload);
router.route("/getImage").get(getImage);
module.exports = router;