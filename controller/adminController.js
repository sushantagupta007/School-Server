const Picture = require("../model/picture");
const Student = require("../model/image");

exports.registerStudent = async (req, res, next) => {
  const {
    name,
    admissionYear,
    age,
    gender,
    bloodGroup,
    id,
    district,
    thana,
    village,
    houseNo,
    mobile,
    classNo,
    guardian,
    email,
  } = req.body;

  //Check if student exists
  const existingStudent = await Student.findOne({ id: req.body.id });
  if (existingStudent) return res.status(400).send("Student Already Exits");

  //Create New User

  const studentInfo = new Student({
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

    email: email,
  });

  try {
    const savedStudent = await studentInfo.save();
    res.send(savedStudent);
  } catch (err) {
    console.log(err);
  }
};

exports.getData = async (req, res) => {
  res.send("hello ");
};

// fieldname: 'file',
//   originalname: 'baba.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: './public/image/',
//   filename: 'baba.jpg.jpg',
//   path: 'public\\image\\baba.jpg.jpg',
//   size: 566107

exports.imageUpload = async (req, res, next) => {
  console.log("helo");
  try {
    const file = new Picture({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileSize: fileSizeFormatter(req.file.size, 2),
      fileType: req.file.mimetype,
    });

    await file.save();

    res.status(201).send("File Upload");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 bytes";
  }
  const dm = decimal || 2;

  const sizes = ["BYTES", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes)) / Math.log(1000);
  return (
    parseFloat(bytes / Math.pow(1000, index)).toFixed(dm) + "-" + sizes[index]
  );
};

exports.getImage = (req, res) => {
  console.log(req);
  console.log("hello get Image");
  res.send("hello");
};
