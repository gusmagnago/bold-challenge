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
  location: {
    type: String,
    default: "Point"
  },
  coordinates: [
    {
      latitude: {
        type: Number
      },
      longitude: {
        type: Number
      }
    }
  ]
});

schema.index({ location: "2dsphere" });

module.exports = mongoose.model("Places", placesSchema);
