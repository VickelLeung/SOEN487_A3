import React, { PureComponent } from "react";
import Axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

class Logout extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Currenshipfy</Title>

        <Button
          style={{ margin: "2% 2%", background: "red", color: "white" }}
          onClick={() => this.props.logout()}
        >
          Logout
        </Button>
      </Wrapper>
    );
  }
}

export default withRouter(Logout);

const Title = styled.h2`
  font-size: 2em;
  color: white;
  margin: 2% 2%;
`;

const Wrapper = styled.div`
  width: 100%;
  background: black;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
