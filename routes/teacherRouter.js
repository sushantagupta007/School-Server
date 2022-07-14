const express = require("express");
const {
  getResult,
  makeResult,
  seeHTML,
  sendPdf
} = require("../controller/teacherController");

const verify = require("./verifyToken");
const router = express.Router();

router.route("/postresult").post(makeResult);
router.route("").get(getResult);
router.route("/pdf").get(seeHTML);
router.route("/sendPdf").post(sendPdf)

module.exports = router;
