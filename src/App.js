import React from "react";

import styled from "styled-components";
import "./App.css";
import { Homepage } from "./Section/Homepage";
// import { Navigation } from "./component/Navigation/Navigation";
import { ConvertCurrency } from "./Section/ConvertCurrency";
import { HistoryCurrency } from "./Section/HistoryCurrency";
import Logout from "./component/Logout/Logout";
import { Footer } from "./Section/Footer";
import { ScrollTo } from "react-scroll-to";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/homepage">
        <Logout />
        <ConvertCurrency />
        <HistoryCurrency />
      </Route>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;