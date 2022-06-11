"use strict";

var mongoose = require("mongoose");

var db_uri = process.env.NODE_ENV === "production" ? process.env.DB_ATLAS_URI : process.env.DB_LOCAL_URI;

var connectDb = function connectDb() {
  return regeneratorRuntime.async(function connectDb$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb://localhost:27017/my-school", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log("connected");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log("Database error");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = connectDb;