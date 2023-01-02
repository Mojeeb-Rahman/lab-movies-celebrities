const mongoose = require("mongoose");

const celebritySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  },
});

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity;
