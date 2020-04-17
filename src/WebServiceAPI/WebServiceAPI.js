import Axios from "axios";

import format from "date-fns/format";
import subDays from "date-fns/subDays";

export const chartCurrency = (prevProps, prevState, currency) => {
  //console.log("testing");
  let toD = format(new Date(), "yyyy-MM-dd");
  let fromD = format(subDays(new Date(), 30), "yyyy-MM-dd");

  let url =
    "https://soen487a2backend.herokuapp.com/API/history_currency?start_at=" +
    fromD +
    "&end_at=" +
    toD +
    "&symbols=" +
    currency;

  console.log("C: " + currency);

  if (prevProps.currency !== currency) {
    console.log(url);
    Axios.get(url)
      .then((res) => {
        let keys = [];
        keys = res.data.rates;

        console.log(keys);
        console.log(Object.keys(keys));
        console.log(Object.values(keys));
        // this.setState({ name: Object.keys(keys), val: Object.values(keys) });
        let name = Object.keys(keys);
        let val = Object.values(keys);

        let newData = [];
        for (let i = 0; i < name.length; i++) {
          let temp = {};
          temp.name = name[i];
          temp.uv = Object.values(val[i]);
          newData.push(temp);
        }

        // this.setState({ data: newData });

        let data = newData;

        let newObj = {
          name: name,
          val: val,
          data: data,
        };

        // console.log(this.state.data);
        return newObj;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const fetchCurrency = async (fromCurrency, toCurrency) => {
  let res = await Axios.get(
    "https://soen487a2backend.herokuapp.com/api/currency_latest?type=" +
      fromCurrency
  );
  let data = res.data;
  console.log(data);

  let res1 = await Axios.get(
    "https://soen487a2backend.herokuapp.com/api/currency_latest?type=" +
      toCurrency
  );
  let data1 = res1.data;
  console.log(data1);

  // this.setState({
  //   fromCurrency: data[0].rates[0].currencyRate,
  //   toCurrency: data1[0].rates[0].currencyRate,
  // });
  let obj = {};
  obj.fromCurrency = data[0].rates[0].currencyRate;
  obj.toCurrency = data1[0].rates[0].currencyRate;
  return obj;
};

export const calculateResults = (amount, fromCurrency, toCurrency) => {
  let results = (amount / fromCurrency) * toCurrency;
  return results;
};
