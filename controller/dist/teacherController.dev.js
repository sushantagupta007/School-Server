"use strict";

var puppeteer = require("puppeteer");

var path = require("path");

var results;

exports.makeResult = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          results = req.body;
          res.redirect("/teacher");

        case 2:
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

exports.seeHTML = function _callee2(req, res) {
  var url, filePath, browser, page, pdfConfig;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = req.headers.referer;
          filePath = path.resolve(__dirname, "../pdf/result.pdf");
          _context2.next = 4;
          return regeneratorRuntime.awrap(puppeteer.launch({
            headless: true
          }));

        case 4:
          browser = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(browser.newPage());

        case 7:
          page = _context2.sent;
          _context2.next = 10;
          return regeneratorRuntime.awrap(page["goto"](url, {
            waitUntil: "networkidle2"
          }));

        case 10:
          pdfConfig = {
            format: "A4",
            printBackground: true,
            margin: {
              // Word's default A4 margins
              top: "5.54cm",
              bottom: "2.54cm",
              left: "2.54cm",
              right: "2.54cm"
            }
          };
          _context2.next = 13;
          return regeneratorRuntime.awrap(page.evaluate(function () {
            var list = document.getElementById("buttonDiv");
            list.removeChild(list.firstElementChild);
          }));

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(page.pdf({
            path: filePath,
            pdfConfig: pdfConfig
          }));

        case 15:
          _context2.next = 17;
          return regeneratorRuntime.awrap(page.waitForTimeout(5000));

        case 17:
          _context2.next = 19;
          return regeneratorRuntime.awrap(browser.close());

        case 19:
          res.download(filePath);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  });
};