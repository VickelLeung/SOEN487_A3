const router = require("express").Router();

router.route("/convert_currency").get((req, res) => {
  //convert currency
  const rp = require("request-promise");
  rp(
    "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=" +
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
