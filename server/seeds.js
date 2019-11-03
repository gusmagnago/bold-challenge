"use strict";

require("dotenv").config();

const database = require("./database");
const Places = require("./../models/places");

const URI = process.env.MONGODB_URI;

database
  .connect(URI)
  .then(() => {
    const places = [
      {
        name: "Point 1",
        street: "Søren Frichs Vej",
        number: "44d",
        city: "Aarhus",
        zipCode: "8230",
        countryCode: 45,
        latitude: 56.151462,
        longitude: 10.172167
      },
      {
        name: "Point 2",
        street: "R. Rebolar, Paço de Arcos",
        number: "1",
        city: "Oeiras",
        zipCode: "2770-148",
        countryCode: 351,
        latitude: 38.7037483,
        longitude: -9.300384
      },
      {
        name: "Point 3",
        street: "Korte Reguliersdwarsstraat",
        number: "7",
        city: "Amsterdam",
        zipCode: "1017",
        countryCode: 31,
        latitude: 52.3659835,
        longitude: 4.8928726
      },
      {
        name: "Point 4",
        street: "Av. Dom João",
        number: "43",
        city: "Lisbon",
        zipCode: "1990-084",
        countryCode: 351,
        latitude: 38.771592,
        longitude: -9.1000007
      },
      {
        name: "Point 5",
        street: "Laplandsgade",
        number: "4A",
        city: "Copenhagen",
        zipCode: "2300",
        countryCode: 45,
        latitude: 55.668998,
        longitude: 12.6083213
      }
    ];
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
