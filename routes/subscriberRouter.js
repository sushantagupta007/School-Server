const express = require("express");
const { makeSubscribe } = require("../controller/subscribeController.js");
const router = express.Router();

router.route("/post").post(makeSubscribe);

module.exports = router;
