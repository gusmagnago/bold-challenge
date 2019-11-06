"use strict";

const { Router } = require("express");
const router = Router();
const Places = require("../models/places");
const placesApi = require("../db/data.json");

router.get("/", (req, res, next) => {
  // console.log("query", req.query);
  const countryCode = req.query.countryCode;
  const zipCode = req.query.zipCode;
  let searchOptions = {};
  if (countryCode) {
    searchOptions = {
      countryCode: req.query.countryCode
    };
  }
  if (zipCode) {
    searchOptions = {
      zipCode: req.query.zipCode
    };
  }
  Places.find(searchOptions)
    .then(places => {
      // console.log(places);
      res.render("index", {
        places
      });
    })
    .catch(error => {
      console.log(
        "there was an error finding the place by the country code",
        error
      );
    });
});

router.get("/places", (req, res, next) => {
  res.json({
    placesApi
  });
});
module.exports = router;
