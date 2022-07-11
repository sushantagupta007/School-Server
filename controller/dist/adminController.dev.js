"use strict";

var Picture = require("../model/picture");

var Student = require("../model/image");

exports.registerStudent = function _callee(req, res, next) {
  var student_id, _req$body, name, admissionYear, age, gender, bloodGroup, id, district, thana, village, houseNo, mobile, classNo, guardian, email, existingStudent, studentInfo, ryu, savedStudent;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          student_id = req.query.id;
          console.log(student_id);
          _req$body = req.body, name = _req$body.name, admissionYear = _req$body.admissionYear, age = _req$body.age, gender = _req$body.gender, bloodGroup = _req$body.bloodGroup, id = _req$body.id, district = _req$body.district, thana = _req$body.thana, village = _req$body.village, houseNo = _req$body.houseNo, mobile = _req$body.mobile, classNo = _req$body.classNo, guardian = _req$body.guardian, email = _req$body.email; //Check if student exists

          _context.next = 5;
          return regeneratorRuntime.awrap(Student.findOne({
            id: req.body.id
          }));

        case 5:
          existingStudent = _context.sent;

          if (!existingStudent) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Student Already Exits"));

        case 8:
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
            id: id,
            email: email
          });
          _context.next = 11;
          return regeneratorRuntime.awrap(Student.findOne({
            _id: student_id
          }));

        case 11:
          ryu = _context.sent;
          console.log(ryu);
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(studentInfo.save());

        case 16:
          savedStudent = _context.sent;
          res.send(savedStudent);
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](13);
          console.log(_context.t0);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[13, 20]]);
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
}; // fieldname: 'file',
//   originalname: 'baba.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: './public/image/',
//   filename: 'baba.jpg.jpg',
//   path: 'public\\image\\baba.jpg.jpg',
//   size: 566107


exports.imageUpload = function _callee3(req, res, next) {
  var file;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("helo");
          _context3.prev = 1;
          file = new Student({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileSize: fileSizeFormatter(req.file.size, 2),
            fileType: req.file.mimetype
          });
          _context3.next = 5;
          return regeneratorRuntime.awrap(file.save());

        case 5:
          res.status(201).send("File Upload");
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(400).send(_context3.t0.message);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var fileSizeFormatter = function fileSizeFormatter(bytes, decimal) {
  if (bytes === 0) {
    return "0 bytes";
  }

  var dm = decimal || 2;
  var sizes = ["BYTES", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  var index = Math.floor(Math.log(bytes)) / Math.log(1000);
  return parseFloat(bytes / Math.pow(1000, index)).toFixed(dm) + "-" + sizes[index];
};

exports.getImage = function (req, res) {
  console.log(req);
  console.log("hello get Image");
  res.send("hello");
};