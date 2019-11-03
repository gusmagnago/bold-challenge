"use strict";

const { Router } = require("express");
const router = Router();
const Places = require("../models/places");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/search", (req, res, next) => {
  Places.find()
    .then(places => {
      res.render("search", { places });
    })
    .catch(error => {
      console.lob("an error trying to find the places", error);
    });
});

module.exports = router;
