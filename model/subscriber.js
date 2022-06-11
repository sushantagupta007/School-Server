const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriber = new Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subscriber", subscriber);
