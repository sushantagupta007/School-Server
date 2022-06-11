var express = require("express");
var app = express();

let results;
exports.makeResult = async (req, res) => {
  results = req.body;
  console.log(results);
  res.redirect("/teacher");
};

exports.getResult = (req, res) => {
  res.render("index", { results });
};

exports.seeHTML = (req, res) => {};
