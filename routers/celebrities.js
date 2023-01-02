const express = require("express");
const Celebrity = require("../models/celebrity");

const router = express.Router();

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      console.log("Celebrities Successfully Loaded!");
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((error) => {
      console.log("An error exist here." + error);
      next(error);
    });
});

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrity) => {
      console.log("Celebrity Inserted Successfully");
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("An error exist here." + error);
      next(error);
    });
});

module.exports = router;
