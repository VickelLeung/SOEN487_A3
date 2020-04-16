import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styled from "styled-components";
// import Axios from "axios";

// import format from "date-fns/format";
// import subDays from "date-fns/subDays";

import { chartCurrency } from "../../WebServiceAPI/WebServiceAPI";

class ChartCurrency extends PureComponent {
  state = {
    name: [],
    val: [],
    data: [],
    currencyName: "",
  };

  componentDidUpdate = (prevProps, prevState) => {
    let Obj = chartCurrency(prevProps, prevState, this.props.currency);
    console.log("test: " + Obj);
    // this.setState({ name: Obj.name, val: Obj.val, data: Obj.data });
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
