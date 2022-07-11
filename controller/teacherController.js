const puppeteer = require("puppeteer");
const path = require("path");

//nodemailer 
const nodemailer = require('nodemailer');

let results;

exports.makeResult = async (req, res) => {
  results = req.body;

  res.redirect("/teacher");
};

exports.getResult = (req, res) => {
  res.render("index", { results });
};

exports.seeHTML = async (req, res) => {
  const url = req.headers.referer;

  const filePath = path.resolve(__dirname, `../pdf/result.pdf`);
  const browser = await puppeteer.launch({ headless: true });

  // //Not Find results in new page

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  const pdfConfig = {
    format: "A4",
    printBackground: true,
    margin: {
      // Word's default A4 margins
      top: "5.54cm",
      bottom: "2.54cm",
      left: "2.54cm",
      right: "2.54cm",
    },
  };
  // await page.evaluate(() => {
  //   const list = document.getElementById("buttonDiv");
  //   list.removeChild(list.firstElementChild);
  // });
  await page.pdf({ path: filePath, pdfConfig });

  await page.waitForTimeout(1);
  await browser.close();

  
  res.download(filePath);
};

exports.sendPdf = async(req,res) =>{
  console.log("hello",req.body)
}