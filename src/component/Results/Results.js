import React from "react";

import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";

const Results = props => {
  return (
    <Wrapper>
      <Total>
        Here is the total {props.total}
        {getSymbolFromCurrency(props.toCurrency)}
      </Total>
    </Wrapper>
  );
};

export { Results };

const Wrapper = styled.div`
  margin: 10%;
  height: 10vh;

  border: 1px solid gray;
`;

const Total = styled.div``;
