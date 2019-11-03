"use strict";

require("dotenv").config();

const database = require("./database");
const Places = require("./../models/places");

const URI = process.env.MONGODB_URI;

database
  .connect(URI)
  .then(() => {
    const places = [...new Array(5)].fill(null).map(() => ({
      name: "Point 1",
      street: "Søren Frichs Vej",
      number: "44d",
      city: "Aarhus",
      zipCode: 8230,
      contryCode: 45,
      latitude: 56.151462,
      longitude: 10.172167
    }));
    return Places.create(places);
  })
  .then(places => {
    console.log(places);
  })
  .catch(error => {
    console.log(error);
    console.error(`There was an error connecting the database to URI "${URI}"`);
    process.exit(1);
  });
