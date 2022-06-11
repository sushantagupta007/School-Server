"use strict";

var Student = require("../model/image");

exports.registerStudent = function _callee(req, res, next) {
  var _req$body, name, admissionYear, age, gender, bloodGroup, id, district, thana, village, houseNo, mobile, classNo, guardian, existingStudent, studentInfo, savedStudent;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, admissionYear = _req$body.admissionYear, age = _req$body.age, gender = _req$body.gender, bloodGroup = _req$body.bloodGroup, id = _req$body.id, district = _req$body.district, thana = _req$body.thana, village = _req$body.village, houseNo = _req$body.houseNo, mobile = _req$body.mobile, classNo = _req$body.classNo, guardian = _req$body.guardian; //Check if student exists

          _context.next = 3;
          return regeneratorRuntime.awrap(Student.findOne({
            id: req.body.id
          }));

        case 3:
          existingStudent = _context.sent;

          if (!existingStudent) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Student Already Exits"));

        case 6:
          //Create New User
          studentInfo = new Student({
            name: name,
            age: age,
            gender: gender,
            blood: bloodGroup,
            district: district,
            thana: thana,
            village: village,
            houseNo: houseNo,
            guardian: guardian,
            mobile: mobile,
            classNo: classNo,
            admissionYear: admissionYear,
            id: id
          });
          _context.prev = 7;
          _context.next = 10;
          return regeneratorRuntime.awrap(studentInfo.save());

        case 10:
          savedStudent = _context.sent;
          res.send(savedStudent);
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](7);
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 14]]);
};

exports.getData = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.send("hello ");

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};