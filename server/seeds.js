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
        address: "Søren Frichs Vej, 44d Aarhus",
        zipCode: "8230",
        countryCode: 45,
        coordinates: {
          latitude: 56.151462,
          longitude: 10.172167
        }
      },
      {
        name: "Point 2",
        address: "R. Rebolar, Paço de Arcos, 1 Oeiras",
        zipCode: "2770-148",
        countryCode: 351,
        coordinates: {
          latitude: 38.7037483,
          longitude: -9.300384
        }
      },
      {
        name: "Point 3",
        address: "Korte Reguliersdwarsstraat, 7 Amsterdam",
        zipCode: "1017",
        countryCode: 31,
        coordinates: {
          latitude: 52.3659835,
          longitude: 4.8928726
        }
      },
      {
        name: "Point 4",
        address: "Av Dom João, 43 Lisbon",
        zipCode: "1990-084",
        countryCode: 351,
        coordinates: {
          latitude: 38.771592,
          longitude: -9.1000007
        }
      },
      {
        name: "Point 5",
        address: "Laplandsgade, 4A Copenhagen",
        zipCode: "2300",
        countryCode: 45,
        coordinates: {
          latitude: 55.668998,
          longitude: 12.6083213
        }
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
