import React, { PureComponent } from "react";
import styled from "styled-components";

import { HistoricTable } from "../component/HistoricTable/HistoricTable";

// import { ChartCurrency } from ".././component/ChartCurrency/ChartCurrency";

class HistoryCurrency extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          <Title>History of Currency</Title>
          {/*  <ChartCurrency currency={this.props.currencyName} /> */}

          <HistoricTable />
        </Container>
      </div>
    );
  }
}

export { HistoryCurrency };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
  border-radius: 10px;
  margin: 2% 30%;
  padding: 2%;
  background: rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2em;
`;
