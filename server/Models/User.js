const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  chatgrps: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("user", signUpSchema);
