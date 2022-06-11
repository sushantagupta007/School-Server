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
  } = req.body;

  let image = req.file.filename;

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
    file: image,
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
