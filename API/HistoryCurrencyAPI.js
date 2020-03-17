import format from "date-fns/format";

const router = require("express").Router();

router.route("/history_currency").get((req, res) => {
  let getCurrency = req.query.currency;
  let toDate = req.query.toDate;
  let FromDate = req.query.FromDate;

  console.log(toDate);
  console.log(FromDate);

  //convert currency
  const rp = require("request-promise");
  rp(
    "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=" +
      getCurrency
  )
    .then(body => {
      res.send(body);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
