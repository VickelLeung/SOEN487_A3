import React from "react";

import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";

import { findEquivalentDollar } from "../../WebServiceAPI/WebServiceAPI";

const Results = (props) => {
  return (
    <Wrapper>
      <Total>
        Here is the total{" "}
        {
          <Res>
            {props.total}
            {getSymbolFromCurrency(props.toCurrency)}
          </Res>
        }
      </Total>
      <EquivalentContainer>
        1 {props.fromCurrency} ={" "}
        {findEquivalentDollar(props.fromCurrencyVal, props.toCurrencyVal)}{" "}
        {props.toCurrency}
      </EquivalentContainer>
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

const EquivalentContainer = styled.div``;
