var schedule = require("node-schedule");
var needle = require("needle");
const express = require("express");
const route = express.Router();

const cors = require("cors");

const History = require("../Model/history.js");

route.use(cors());

// run everyday at midnight 0 0 * * *
schedule.scheduleJob("0 0 * * *", () => {
  console.log("test");
  needle.post(
    "https://soen487a2backend.herokuapp.com/api/add_currency_history",
    (error, response) => {
      if (!error && response.statusCode == 200) {
      } else {
        console.log(error);
      }
    }
  );
});

// add currency at a specific date
route.post("/add_currency_history_at", (req, res) => {
  let date = req.query.date;

  const rp = require("request-promise");
  rp("https://api.exchangeratesapi.io/" + date).then((body) => {
    console.log(body);
    let jObj = JSON.parse(body);

    let getSize = Object.keys(jObj.rates).length;

    let rates = [];

    for (let i = 0; i < getSize; i++) {
      let rate = {};
      rate.currencyType = Object.keys(jObj.rates)[i];
      rate.currencyRate = Object.values(jObj.rates)[i];
      rates.push(rate);
    }

    const date = jObj.date;
    const newHistory = new History({
      date,
      rates,
    });

    newHistory
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

// add the latest history currency
route.post("/add_currency_history", (req, res) => {
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

    const date = jObj.date;
    const newHistory = new History({
      date,
      rates,
    });

    newHistory
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

// get a currency at specific date
route.get("/currency_history_date", (req, res) => {
  const date = req.query.date;

  History.find({
    date: date,
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get all history currency
route.get("/currency_history", (req, res) => {
  const currency = req.query.currency;

  History.find({
    rates: {
      $elemMatch: {
        currencyType: currency,
      },
    },
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = route;
