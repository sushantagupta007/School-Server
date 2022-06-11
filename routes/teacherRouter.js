const express = require("express");
const {
  getResult,
  makeResult,
  seeHTML,
} = require("../controller/teacherController");

const verify = require("./verifyToken");
const router = express.Router();

router.route("/postresult").post(makeResult);
router.route("").get(getResult);
router.route("/see").get(seeHTML);

module.exports = router;
