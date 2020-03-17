import React from "react";

import styled from "styled-components";
import "./App.css";
import { Homepage } from "./Section/Homepage";
import { Navigation } from "./component/Navigation/Navigation";
import { ConvertCurrency } from "./Section/ConvertCurrency";
import { HistoryCurrency } from "./Section/HistoryCurrency";
import { Footer } from "./Section/Footer";

function App() {
  return (
    <Wrapper>
      {/* <Navigation /> */}
      <Homepage />
      <HistoryCurrency />
      <ConvertCurrency />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;
