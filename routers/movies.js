const express = require("express");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const router = express.Router();

router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log("Movies Successfully Loaded!");
      res.render("movies/movies", { movies });
    })
    .catch((error) => {
      console.log("An error exist here." + error);
      next(error);
    });
});

router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      console.log("Celebrities Successfully Loaded!");
      res.render("movies/new-movie", { celebrities });
    })
    .catch((error) => {
      console.log("An error exist here." + error);
      next(error);
    });
});

router.post("/create", (req, res, next) => {
  const { title, genre, polt, cost } = req.body;
  Movie.create({ title, genre, polt, cost })
    .then((movie) => {
      console.log("Movie Inserted Successfully");
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log("An error exist here." + error);
      next(error);
    });
});

module.exports = router;
