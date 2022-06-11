"use strict";

var router = require("express").Router();

var userRouter = require("./userRouter");

var teacherRouter = require("./teacherRouter");

var subscribeRouter = require("./subscriberRouter");

var adminRouter = require("./adminRoute"); // const verify = require("./verifyToken");


router.use("/user", userRouter);
router.use("/teacher", teacherRouter);
router.use("/subscribe", subscribeRouter);
router.use("/admin", adminRouter);
module.exports = router;