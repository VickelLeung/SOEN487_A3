import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class ConvertCurrency extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Currency converter</Title>
        <ContentContainer>
          <FormContainer>
            <TextField label="Amount" />

            <FormControl>
              <InputLabel>From</InputLabel>
              <FromInput
              // value={age}
              //   onChange={handleChange}
              >
                <MenuItem value={10}>CAD</MenuItem>
                <MenuItem value={20}>USD</MenuItem>
                <MenuItem value={30}>EURO</MenuItem>
                <MenuItem value={30}>GDPB</MenuItem>
              </FromInput>
            </FormControl>

            <FormControl>
              <InputLabel>To</InputLabel>
              <FromInput
              // value={age}
              //   onChange={handleChange}
              >
                <MenuItem value={10}>CAD</MenuItem>
                <MenuItem value={20}>USD</MenuItem>
                <MenuItem value={30}>EURO</MenuItem>
                <MenuItem value={30}>GDPB</MenuItem>
              </FromInput>
            </FormControl>
          </FormContainer>

          <SubmitBtn variant="contained">Primary</SubmitBtn>
        </ContentContainer>
      </Wrapper>
    );
  }
}

export { ConvertCurrency };

const Title = styled.div``;

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
