import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

class ConvertCurrency extends PureComponent {
  state = {
    amount: "",
    fromCurrency: "",
    toCurrency: ""
  };

  componentDidMount = () => {
    axios
      .get("https://soen487a2backend.herokuapp.com/API/convert_currency")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  convertCurrency = () => {};

  setFromCurrency = currency => {
    this.setState({ FromCurrency: currency });
  };

  setToCurrency = currency => {
    this.setState({ toCurrency: currency });
  };

  render() {
    return (
      <Wrapper>
        <ContentContainer>
          <Title>Currency converter</Title>
          <FormContainer>
            <TextField
              label="Amount"
              onChange={e => {
                this.setState({ amount: e.target.value });
              }}
            />

            <FormControl>
              <InputLabel>From</InputLabel>
              <FromInput
                // value={age}
                value={this.state.fromCurrency}
                //   onChange={handleChange}
              >
                <MenuItem onClick={() => this.setFromCurrency("CADSD")}>
                  CAD
                </MenuItem>
                <MenuItem onClick={() => this.setFromCurrency("USD")}>
                  USD
                </MenuItem>
                <MenuItem onClick={() => this.setFromCurrency("EURO")}>
                  EURO
                </MenuItem>
                <MenuItem onClick={() => this.setFromCurrency("GDPB")}>
                  GDPB
                </MenuItem>
              </FromInput>
            </FormControl>

            <FormControl>
              <InputLabel>To</InputLabel>
              <FromInput
                value={this.state.toCurrency}
                // onChange={handleChange}
              >
                <MenuItem onClick={() => this.setToCurrency("CAD")}>
                  CAD
                </MenuItem>
                <MenuItem onClick={() => this.setToCurrency("USD")}>
                  USD
                </MenuItem>
                <MenuItem onClick={() => this.setToCurrency("EURO")}>
                  EURO
                </MenuItem>
                <MenuItem onClick={() => this.setToCurrency("GDPB")}>
                  GDPB
                </MenuItem>
              </FromInput>
            </FormControl>
          </FormContainer>

          <SubmitBtn onClick={this.convertCurrency} variant="contained">
            Primary
          </SubmitBtn>
          {this.state.fromCurrency}
          {this.state.toCurrency}
        </ContentContainer>
      </Wrapper>
    );
  }
}

export { ConvertCurrency };

const Title = styled.div`
  margin: 5% 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FromInput = styled(Select)`
  width: 15vw;
`;

const SubmitBtn = styled(Button)`
  marign: 3% 0;
  width: 30vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  text-align: center;
  background: linear-gradient(
      135deg,
      rgba(159, 159, 159, 0.46) 0%,
      rgba(159, 159, 159, 0.46) 14.286%,
      rgba(165, 165, 165, 0.46) 14.286%,
      rgba(165, 165, 165, 0.46) 28.572%,
      rgba(171, 171, 171, 0.46) 28.572%,
      rgba(171, 171, 171, 0.46) 42.858%,
      rgba(178, 178, 178, 0.46) 42.858%,
      rgba(178, 178, 178, 0.46) 57.144%,
      rgba(184, 184, 184, 0.46) 57.144%,
      rgba(184, 184, 184, 0.46) 71.43%,
      rgba(190, 190, 190, 0.46) 71.43%,
      rgba(190, 190, 190, 0.46) 85.716%,
      rgba(196, 196, 196, 0.46) 85.716%,
      rgba(196, 196, 196, 0.46) 100.002%
    ),
    linear-gradient(
      45deg,
      rgb(252, 252, 252) 0%,
      rgb(252, 252, 252) 14.286%,
      rgb(246, 246, 246) 14.286%,
      rgb(246, 246, 246) 28.572%,
      rgb(241, 241, 241) 28.572%,
      rgb(241, 241, 241) 42.858%,
      rgb(235, 235, 235) 42.858%,
      rgb(235, 235, 235) 57.144%,
      rgb(229, 229, 229) 57.144%,
      rgb(229, 229, 229) 71.43%,
      rgb(224, 224, 224) 71.43%,
      rgb(224, 224, 224) 85.716%,
      rgb(218, 218, 218) 85.716%,
      rgb(218, 218, 218) 100.002%
    );
`;
