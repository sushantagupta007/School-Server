const mongoose = require("mongoose");
const { Schema } = mongoose;

const pictureSchema = new Schema(
  {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    fileType: {
      type: String,
    },
    fileSize: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("picture", pictureSchema);
