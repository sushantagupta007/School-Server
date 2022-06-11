const bcrypt = require("bcryptjs");
const Users = require("../model/model");
const jwt = require("jsonwebtoken");
const sendToken = require("../middleware/jwt");

exports.registerUser = async (req, res) => {
  const { name, email, contact, id, p1, address, role } = req.body;

  //Check if user exists
  const existingUser = await Users.findOne({ email: req.body.email });
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

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Users.findOne({ email: email });

  if (!user) return res.status(400).send("Email or Password is Wrong");

  //Validation Password
  const validPass = await bcrypt.compare(password, user.password);
  console.log(validPass);
  if (!validPass) {
    return res.status(400).json("Invalid Password");
  }
  if (validPass && user) {
    sendToken(user, res, 200);
  }

  //Create and Assign a Token
};
