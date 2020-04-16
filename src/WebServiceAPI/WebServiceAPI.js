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

export const getCurrency = () => {};
