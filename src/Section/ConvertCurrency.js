import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";

import { Results } from "../component/Results/Results";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

import Currencies from "../services/Currencies";

class ConvertCurrency extends PureComponent {
  state = {
    amount: 0,
    fromCurrency: 0,
    toCurrency: "",
    fetchedCurrency: "",
    total: 0,
    isSaved: false, //save to cache if true
    listOfCurrencies: [],
    isDisplayResults: false
  };

  componentDidMount = () => {
    let tempArr = this.state.listOfCurrencies.concat(Currencies.Currencies);
    this.setState({ listOfCurrencies: tempArr });
  };

  fetchCurrency = async () => {
    let getFromCurrency = this.state.fromCurrency;
    let getToCurrency = this.state.toCurrency;
    let res = await axios.get(
      "https://soen487a2backend.herokuapp.com/API/convert_currency?from_currency=" +
        getFromCurrency +
        "&to_currency=" +
        getToCurrency
    );

    let data = res.data;
    console.log(data);
    this.setState({ fetchedCurrency: Object.values(data) });
  };

  convertCurrency = async () => {
    await this.fetchCurrency();

    let results = Math.round(
      this.state.amount * this.state.fetchedCurrency[0]
    ).toFixed(2);

    // console.log(results);
    this.setState({ total: results, isDisplayResults: true });
  };

  handleFromCurrency = e => {
    console.log(e);
    this.setState({ fromCurrency: e.target.value });
  };

  handleToCurrency = e => {
    this.setState({ toCurrency: e.target.value });
  };

  switchCurrency = () => {
    let tempTo = this.state.fromCurrency;
    let tempFrom = this.state.toCurrency;
    this.setState({ toCurrency: tempTo, fromCurrency: tempFrom });
  };

  render() {
    return (
      <Wrapper>
        <ContentContainer>
          <Title>Currency converter</Title>
          <TextField
            label="Amount"
            type="number"
            min="0"
            onChange={e => {
              this.setState({ amount: e.target.value });
            }}
          />
          <FormContainer>
            <FormControl>
              <InputLabel>From</InputLabel>
              <FromInput
                value={this.state.fromCurrency}
                onChange={this.handleFromCurrency}
              >
                {this.state.listOfCurrencies.map((item, index) => {
                  return (
                    <MenuItem value={item.id} key={index}>
                      {item.id}
                      {getSymbolFromCurrency(item.id)}
                      <Names>{item.currencyName}</Names>
                    </MenuItem>
                  );
                })}
              </FromInput>
            </FormControl>

            <Button onClick={this.switchCurrency}>
              <SyncAltIcon />
            </Button>

            <FormControl>
              <InputLabel>To</InputLabel>
              <FromInput
                value={this.state.toCurrency}
                onChange={this.handleToCurrency}
              >
                {this.state.listOfCurrencies.map((item, index) => {
                  return (
                    <MenuItem value={item.id} key={index}>
                      {item.id}
                      {getSymbolFromCurrency(item.id)}
                      <Names>{item.currencyName}</Names>
                    </MenuItem>
                  );
                })}
              </FromInput>
            </FormControl>
          </FormContainer>
          {/* {this.state.fromCurrency}
          {this.state.toCurrency} */}
          <SubmitBtn onClick={this.convertCurrency} variant="contained">
            Calculate
          </SubmitBtn>
        </ContentContainer>
        {this.state.isDisplayResults ? (
          <Results
            total={this.state.total}
            toCurrency={this.state.toCurrency}
          />
        ) : (
          <div></div>
        )}
      </Wrapper>
    );
  }
}

export { ConvertCurrency };

const Title = styled.div`
  margin: 5% 0;
  font-size: 2em;
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
  margin-bottom: 5%;
`;

const FromInput = styled(Select)`
  width: 15vw;
`;

const SubmitBtn = styled(Button)`
  marign: 3% 0;
  width: 30vw;
`;

const Names = styled.div`
  margin-left: 4%;
  font-size: 0.8em;
  color: #909090;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
