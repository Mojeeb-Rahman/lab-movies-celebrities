const mongoose = require("mongoose");
const Celebrity = require("./celebrity");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cost: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: Celebrity,
    },
  ],
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
