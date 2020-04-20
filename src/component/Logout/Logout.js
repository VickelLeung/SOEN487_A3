import React, { PureComponent } from "react";
import Axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

class Logout extends PureComponent {
  logout = () => {
    let payload = {
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    };
    Axios.put(
      "https://soen487a2backend.herokuapp.com/authenticate/logout",
      payload
    )
      .then((res) => {
        this.props.history.push("/");
      })
      .catch(() => {});
  };
  render() {
    return (
      <Wrapper>
        <Button onClick={this.logout}>Logout</Button>
      </Wrapper>
    );
  }
}

export default withRouter(Logout);

const Wrapper = styled.div`
  width: 100%;
  background: rbgba(0, 0, 0, 0.5);
  text-align: right;
`;
