"use strict";

var results;

exports.makeResult = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          results = req.body;
          console.log(req.protocol);
          console.log(req.get("host"));
          res.redirect("/teacher");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getResult = function (req, res) {
  res.render("index", {
    results: results
  });
};

exports.seeHTML = function (req, res) {
  res.json("hello I am from pdf");
  console.log("hello");
};