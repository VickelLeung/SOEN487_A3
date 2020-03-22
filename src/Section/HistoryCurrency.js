import React, { PureComponent } from "react";
import styled from "styled-components";

import { ChartCurrency } from ".././component/ChartCurrency/ChartCurrency";

class HistoryCurrency extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          <Title>History of Currency</Title>
          <ChartCurrency currency={this.props.currencyName} />
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
`;

const Title = styled.h2``;
