"use strict";

const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  street: {
    type: String
  },
  number: {
    type: String
  },
  city: {
    type: String
  },
  zipCode: {
    type: String
  },
  countryCode: {
    type: Number
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  }
});

module.exports = mongoose.model("Places", placesSchema);
