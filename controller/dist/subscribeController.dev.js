"use strict";

var Subscriber = require("../model/subscriber");

exports.makeSubscribe = function _callee(req, res) {
  var email, subsribedUser, subscriber, savedSubscriber;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = req.body.email; //Check if user exists

          _context.next = 3;
          return regeneratorRuntime.awrap(Subscriber.findOne({
            email: req.body.email
          }));

        case 3:
          subsribedUser = _context.sent;

          if (!subsribedUser) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Subsriber Already Exists"));

        case 6:
          //Create New User
          subscriber = new Subscriber({
            email: email
          });
          _context.prev = 7;
          _context.next = 10;
          return regeneratorRuntime.awrap(subscriber.save());

        case 10:
          savedSubscriber = _context.sent;
          res.send(savedSubscriber);
          console.log(savedSubscriber);
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](7);
          console.log(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 15]]);
};