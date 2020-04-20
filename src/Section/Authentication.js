import React, { PureComponent } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class Authentication extends PureComponent {
  state = {
    switch: true,
    LogEmail: "",
    LogPassword: "",
    RegEmail: "",
    RegPassword: "",
  };

  login = () => {
    let payload = {
      email: this.state.RegEmail,
      password: this.state.RegPassword,
    };

    Axios.put("https://financeshify.herokuapp.com/authenticate/login", payload)
      .then((res) => {
        console.log(res);
        this.props.history.push("/homepage");
      })
      .catch(() => {});
  };

  register = () => {
    let payload = {
      email: this.state.RegEmail,
      password: this.state.RegPassword,
    };

    Axios.post(
      "https://financeshify.herokuapp.com/authenticate/register",
      payload
    )
      .then(() => {})
      .catch(() => {});
  };

  render() {
    return (
      <Wrapper>
        {this.state.switch ? (
          <LoginContainer>
            <h2>Login</h2>
            <TextField
              onChange={(e) => {
                this.setState({ LogEmail: e.target.value });
              }}
              required
              label="Email"
            />
            <TextField
              onChange={(e) => {
                this.setState({ LogPassword: e.target.value });
              }}
              required
              type="password"
              label="Password"
            />
            <Button onClick={this.login}>Submit</Button>
            <Button
              onClick={() => {
                this.setState({ switch: !this.state.switch });
              }}
            >
              Need an account? Register here
            </Button>
          </LoginContainer>
        ) : (
          <RegisterContainer>
            <h2>Register</h2>
            <TextField
              onChange={(e) => {
                this.setState({ RegEmail: e.target.value });
              }}
              required
              label="Email"
            />
            <TextField
              onChange={(e) => {
                this.setState({ RegPassword: e.target.value });
              }}
              required
              type="password"
              label="Password"
            />
            <Button onClick={this.register}>Submit</Button>
            <Button
              onClick={() => {
                this.setState({ switch: !this.state.switch });
              }}
            >
              Already have an account? login here
            </Button>
          </RegisterContainer>
        )}
      </Wrapper>
    );
  }
}

export default withRouter(Authentication);

const Wrapper = styled.div`
  margin: 4% 0;
  opacity: 0.4;
  background: white;
  border-radius: 10px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 5%;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 5%;
`;
