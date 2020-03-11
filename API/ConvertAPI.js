const router = require("express").Router();

router.route("/convert_currency").get((req, res) => {
  let getFromCurr = req.query.from_currency;
  let getToCurr = req.query.to_currency;

  //convert currency
  const rp = require("request-promise");
  rp(
    "https://free.currconv.com/api/v7/convert?q=" +
      getFromCurr +
      "_" +
      getToCurr +
      "&compact=ultra&apiKey=" +
      process.env.apikey
  )
    .then(body => {
      res.send(body);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
