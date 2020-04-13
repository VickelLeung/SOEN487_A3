const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const currencyDateSchema = new Schema({
//   currencyType: { type: String, require: true },
//   currencyPrice: { type: Number, require: true },
// });

const currencySchema = new Schema({
  date: { type: String, require: true },
  rates: [
    {
      currencyType: { type: String, require: true },
      currencyRate: { type: Number, require: true },
    },
  ],
});

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
