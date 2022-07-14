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

  // res.send(filePath)
  res.download(filePath);
};

exports.sendPdf = async(req,res) =>{
  console.log(path.resolve(__dirname+'/pdf/result.pdf'))
  var transport = nodemailer.createTransport({
  // host: "smtp.mailtrap.io",
  // port: 2525,
  service:'gmail',
  auth: {
    type:'OAuth2',
    user: process.env.user,
    clientId:  process.env.id,
        // "d51d2dedc717fe",
    clientSecret: process.env.password, 
    accessToken: process.env.token
    // pass: "831bc5a1fd1d4a"
  }
  });
  const mailOptions = {
    from: 'sushanta.sust@gmail.com', // Sender address
    to: 'sushanta.gupta007@gmail.com', // List of recipients
    subject: 'Transcrpit', // Subject line
    text: 'Your Transcript', // Plain text body
    attachments: [
      {   // file on disk as an attachment
        filename: 'result.pdf',
        path: path.resolve(__dirname, `../pdf/result.pdf`),
    },
    ]
  };

  transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
     console.log(info)
    }
  });
  
}


// 998519038372-a6flvhs6cr10sit700cos27du3o1mnlq.apps.googleusercontent.com

// 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