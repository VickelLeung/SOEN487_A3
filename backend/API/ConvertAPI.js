const router = require("express").Router();

router.route("/convert_currency").get((req, res) => {
  let amount = req.query.amount;
  let toCurrency = req.query.toCurr;
  let fromCurrency = req.query.fromCurr;
  let convertedAmount = 0;

  //convert currency
  const rp = require("request-promise");
  rp(
    "https://free.currconv.com/api/v7/convert?q=USD_CAD&compact=ultra&apiKey=" +
      process.env.apikey
  )
    .then(body => {
      console.log(body);
    })
    .catch(err => {
      console.log(err);
    });

  res.send(
    "hello world : " +
      " Amount: " +
      amount +
      " toCurren: " +
      toCurrency +
      " from: " +
      fromCurrency
  );
});

module.exports = router;
