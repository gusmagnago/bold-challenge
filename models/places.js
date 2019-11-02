"use strict";

const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: [
    {
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
      }
    }
  ],
  location: [
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

module.exports = mongoose.model("User", placesSchema);
