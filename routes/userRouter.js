const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/signin").post(loginUser);

module.exports = router;
