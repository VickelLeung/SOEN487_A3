const router = require("express").Router();

router.route("/history_currency").get((req, res) => {
  let symbols = req.query.symbols;
  let end_at = req.query.end_at;
  let start_at = req.query.start_at;

  console.log("from " + start_at);
  console.log("to " + end_at);

  //convert currency
  const rp = require("request-promise");
  rp(
    "https://api.exchangeratesapi.io/history?start_at=" +
      start_at +
      "&end_at=" +
      end_at +
      "&symbols=" +
      symbols
  )
    .then(body => {
      return res.send(body);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
