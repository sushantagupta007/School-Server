"use strict";

var express = require("express");

var _require = require("../controller/adminController"),
    registerStudent = _require.registerStudent,
    getData = _require.getData,
    imageUpload = _require.imageUpload;

var upload = require("../middleware/upload");

var router = express.Router();
router.post("/student_register", upload, registerStudent);
router.route("/student_info").get(getData);
module.exports = router;