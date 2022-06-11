const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  //Get Token from headers
  const tokenHeader = req.header("auth-token");
  console.log(tokenHeader);
  if (typeof tokenHeader !== "undefined") {
    const tokenArray = tokenHeader.split(" ");
    const token = tokenArray[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
  console.log(token);
}

module.exports = verify;
