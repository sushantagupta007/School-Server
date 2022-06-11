const router = require("express").Router();
const userRouter = require("./userRouter");
const teacherRouter = require("./teacherRouter");
const subscribeRouter = require("./subscriberRouter");
const adminRouter = require("./adminRoute");
// const verify = require("./verifyToken");

router.use("/user", userRouter);
router.use("/teacher", teacherRouter);
router.use("/subscribe", subscribeRouter);
router.use("/admin", adminRouter);

module.exports = router;
