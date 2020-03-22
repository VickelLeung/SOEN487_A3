import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import styled from "styled-components";
import Axios from "axios";

import format from "date-fns/format";
import subDays from "date-fns/subDays";

class ChartCurrency extends PureComponent {
  state = {
    name: [],
    val: [],
    data: [],
    currencyName: ""
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("test");
    let toD = format(new Date(), "yyyy-MM-dd");
    let fromD = format(subDays(new Date(), 30), "yyyy-MM-dd");

    let url =
      "https://soen487a2backend.herokuapp.com/API/history_currency?start_at=" +
      fromD +
      "&end_at=" +
      toD +
      "&symbols=" +
      this.props.currency;

    if (prevProps.currency !== this.props.currency) {
      console.log(url);
      Axios.get(url)
        .then(res => {
          let keys = [];
          keys = res.data.rates;

          console.log(keys);
          console.log(Object.keys(keys));
          console.log(Object.values(keys));
          this.setState({ name: Object.keys(keys), val: Object.values(keys) });

          let newData = [];
          for (let i = 0; i < this.state.name.length; i++) {
            let temp = {};
            temp.name = this.state.name[i];
            temp.uv = Object.values(this.state.val[i]);
            newData.push(temp);
          }

          this.setState({ data: newData });

          console.log(this.state.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Box>
        <h2>{this.props.currency}</h2>
        <LineChart
          width={600}
          height={300}
          data={this.state.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Box>
    );
  }
}

export { ChartCurrency };

const Box = styled.div`
  border: 1px solid black;
`;
