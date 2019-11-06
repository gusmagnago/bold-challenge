"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  zipCode: {
    type: String
  },
  countryCode: {
    type: Number
  },
  coordinates: {
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  },
  link: {
    type: String
  }
});

module.exports = mongoose.model("Places", schema);
