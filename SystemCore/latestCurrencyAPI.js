var schedule = require("node-schedule");
var needle = require("needle");
const express = require("express");
const route = express.Router();

const cors = require("cors");

const Latest = require("../Model/latest.js");

route.use(cors());

// run everyday at midnight 0 0 * * *
schedule.scheduleJob("0 0 * * *", () => {
  needle.put(
    "https://soen487a2backend.herokuapp.com/api/add_currency_latest",
    (error, response) => {
      if (!error && response.statusCode == 200) {
      } else {
        console.log(error);
      }
    }
  );
});

// add the latest currency
route.put("/add_currency_latest", (req, res) => {
  const rp = require("request-promise");
  rp(process.env.apiLink).then((body) => {
    let jObj = JSON.parse(body);

    let getSize = Object.keys(jObj.rates).length;

    let rates = [];

    for (let i = 0; i < getSize; i++) {
      let rate = {};
      rate.currencyType = Object.keys(jObj.rates)[i];
      rate.currencyRate = Object.values(jObj.rates)[i];
      rates.push(rate);
    }

    const newLatest = Latest({
      rates,
    });
    newLatest
      .save()
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

// get the latest currency
route.get("/currency_latest", (req, res) => {
  const type = req.query.type;

  Latest.find(
    {},
    {
      rates: {
        $elemMatch: {
          currencyType: type,
        },
      },
    }
  )
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get all the latest currency
route.get("/get_all_currency_latest", (req, res) => {
  const type = req.query.type;
  console.log("test" + type);

  Latest.find()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = route;
