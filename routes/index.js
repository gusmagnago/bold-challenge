"use strict";

const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

// ĈREATE
router.get("/create", (req, res, next) => {
  res.render("create");
});

// SEARCH
router.get("/search", (req, res, next) => {
  res.render("search");
});
module.exports = router;
