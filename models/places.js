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
    type: Number
  },
  zipCode: {
    type: Number
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

module.exports = mongoose.model("User", placesSchema);
