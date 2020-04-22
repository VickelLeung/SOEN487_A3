import React, { Component } from "react";

import styled from "styled-components";
import "./App.css";
import { Homepage } from "./Section/Homepage";
// import { Navigation } from "./component/Navigation/Navigation";
import { ConvertCurrency } from "./Section/ConvertCurrency";
import { HistoryCurrency } from "./Section/HistoryCurrency";
import Logout from "./component/Logout/Logout";
import { PageNotFound } from "./Section/PageNotFound";
import { Footer } from "./Section/Footer";
import { ScrollTo } from "react-scroll-to";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import Axios from "axios";
import { getAuth } from "./WebServiceAPI/WebServiceAPI";

class App extends Component {
  state = { logStatus: false };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.logStatus !== getAuth()) {
      this.setState({ logStatus: getAuth() });
      console.log(this.state.logStatus);
    }
  }

  logout = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    let status = getAuth();
    this.props.history.push("/");
    this.setState({ logStatus: status });
  };

  render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          {this.state.logStatus ? (
            <Route exact path={"/homepage"}>
              <Logout logout={this.logout} />
              <ConvertCurrency />
              <HistoryCurrency />
            </Route>
          ) : (
            <Route path="*" exact={true}>
              <PageNotFound />
            </Route>
          )}
        </Switch>
        <Footer />
      </Wrapper>
    );
  }
}

export default withRouter(App);

const Wrapper = styled.div`
  height: 100vh;
`;
