"use strict";

const { Router } = require("express");
const router = Router();
const Places = require("./../models/places");

router.get("/", (req, res, next) => {
  res.render("index");
});

// FIND
router.get("/search", (req, res, next) => {
  Places.find()
    .then(places => {
      res.render("search", { places });
    })
    .catch(error => {
      console.log(error);
    });
});

// SEARCH
router.get("/search", (req, res, next) => {
  res.render("search");
});
module.exports = router;
