const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port || 5000;

const connectDB = require("./db/db");
const router = require("./routes/index.js");

//App Initializatino
const app = express();

//Database Connection
connectDB();

//middlware
app.use(cors());
//It is important to use express.json() first and then app.use(router)
app.use(express.json());
app.use(router);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/static", express.static('./static/'));
app.set("view engine", "ejs");

app.get("/user", (req, res) => {
  res.send("User");
});

app.listen(port, () => {
  console.log("Listening Port", port);
});
