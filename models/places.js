"use strict";

const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: [
    {
      latitude: {
        type: Number,
        min: -180,
        max: 180
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180
      }
    }
  ]
});

module.exports = mongoose.model("User", placesSchema);
