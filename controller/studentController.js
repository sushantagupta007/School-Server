const Students = require("../model/image");

exports.registerStudent = async (req, res) => {
  const {
    name,
    gender,
    age,
    bloodGroup,
    classNo,
    admissionYear,
    guardian,
    guardianImage,
    studentImage,
  } = req.body;

  //Check if user exists
  const existingStudent = await Students.findOne({ email: req.body.email });
  if (existingUser) return res.status(400).send("Email Already Exists");

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(p1, salt);

  //Create New User

  const user = new Users({
    name: name,
    email: email,
    mobile: contact,
    address: address,
    role: role,
    id: id,
    password: hasPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
    console.log(savedUser);
  } catch (err) {
    console.log(err);
  }
};
