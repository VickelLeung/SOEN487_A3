import React from "react";

import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";

const Results = props => {
  return (
    <Wrapper>
      <Total>
        Here is the total {<Res>{props.total}</Res>}
        {getSymbolFromCurrency(props.toCurrency)}
      </Total>
    </Wrapper>
  );
};

export { Results };

const Wrapper = styled.div`
  margin: 2%;
  height: 10vh;

  border: 1px solid gray;
`;

const Total = styled.div``;

const Res = styled.span`
  color: green;
`;
