"use strict";

const { Router } = require("express");
const router = Router();
const Places = require("./../models/places");

router.get("/", (req, res, next) => {
  res.render("index");
});

// ĈREATE
router.get("/create", (req, res, next) => {
  res.render("create");
});

router.post("/create", (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  Places.create({
    name,
    address,
    latitude,
    longitude
  })
    .then(places => {
      res.redirect("/create");
      console.log("a place was created", places);
    })
    .catch(error => {
      console.log("an error occuried trying to create a place", error);
    });
});
// FIND

// SEARCH
router.get("/search", (req, res, next) => {
  res.render("search");
});
module.exports = router;
