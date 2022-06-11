"use strict";

var express = require("express");

var _require = require("../controller/teacherController"),
    getResult = _require.getResult,
    makeResult = _require.makeResult,
    seeHTML = _require.seeHTML;

var verify = require("./verifyToken");

var router = express.Router();
router.route("/postresult").post(makeResult);
router.route("").get(getResult);
router.route("/see").get(seeHTML);
module.exports = router;