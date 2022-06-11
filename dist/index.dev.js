"use strict";

var express = require("express");

var cors = require("cors");

var dotenv = require("dotenv");

dotenv.config();
var port = process.env.port || 5000;

var connectDB = require("./db/db");

var router = require("./routes/index.js"); //App Initializatino


var app = express(); //Database Connection

connectDB(); //middlware

app.use(cors()); //It is important to use express.json() first and then app.use(router)

app.use(express.json());
app.use(router);
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]("public"));
app.set("view engine", "ejs");
app.get("/user", function (req, res) {
  res.send("User");
});
app.listen(port, function () {
  console.log("Listening Port", port);
});