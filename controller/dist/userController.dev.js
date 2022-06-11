"use strict";

var bcrypt = require("bcryptjs");

var Users = require("../model/model");

var jwt = require("jsonwebtoken");

var sendToken = require("../middleware/jwt");

exports.registerUser = function _callee(req, res) {
  var _req$body, name, email, contact, id, p1, address, role, existingUser, salt, hasPassword, user, savedUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, contact = _req$body.contact, id = _req$body.id, p1 = _req$body.p1, address = _req$body.address, role = _req$body.role; //Check if user exists

          _context.next = 3;
          return regeneratorRuntime.awrap(Users.findOne({
            email: req.body.email
          }));

        case 3:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Email Already Exists"));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 8:
          salt = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(bcrypt.hash(p1, salt));

        case 11:
          hasPassword = _context.sent;
          //Create New User
          user = new Users({
            name: name,
            email: email,
            mobile: contact,
            address: address,
            role: role,
            id: id,
            password: hasPassword
          });
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(user.save());

        case 16:
          savedUser = _context.sent;
          res.send(savedUser);
          console.log(savedUser);
          _context.next = 24;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](13);
          console.log(_context.t0);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[13, 21]]);
};

exports.loginUser = function _callee2(req, res) {
  var email, password, user, validPass;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = req.body.email;
          password = req.body.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Users.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("Email or Password is Wrong"));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          validPass = _context2.sent;
          console.log(validPass);

          if (validPass) {
            _context2.next = 13;
            break;
          }

          return _context2.abrupt("return", res.status(400).json("Invalid Password"));

        case 13:
          if (validPass && user) {
            sendToken(user, res, 200);
          } //Create and Assign a Token


        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
};