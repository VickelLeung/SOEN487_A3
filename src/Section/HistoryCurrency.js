import React, { PureComponent } from "react";
import styled from "styled-components";
import Axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

class HistoryCurrency extends PureComponent {
  state = {
    toDate: new Date(),
    fromDate: ""
  };

  componentDidMount = () => {
    Axios.get(
      "https://soen487a2backend.herokuapp.com/API/history_currency?toDate=2019-10-10&FromDate=2019-10-09&symbols=CAD"
    );
  };

  data = [
    { name: "Page A", uv: 400 },
    { name: "Page B", uv: 150 }
  ];

  render() {
    return (
      <div>
        <Container>
          <Box>
            <h2>Currency</h2>
            <LineChart
              width={600}
              height={300}
              data={this.data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Box>

          <Box>
            <h2>Currency</h2>
            <LineChart
              width={600}
              height={300}
              data={this.data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Box>
        </Container>
      </div>
    );
  }
}

export { HistoryCurrency };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid black;
`;
