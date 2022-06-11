const mongoose = require("mongoose");

const db_uri =
  process.env.NODE_ENV === "production"
    ? process.env.DB_ATLAS_URI
    : process.env.DB_LOCAL_URI;

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my-school", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (err) {
    console.log("Database error");
  }
};
module.exports = connectDb;
