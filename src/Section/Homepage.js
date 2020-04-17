import React, { PureComponent } from "react";
import styled, { keyframes } from "styled-components";

import { bounce } from "react-animations";

// import FacebookLogin from "react-facebook-login";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

class Homepage extends PureComponent {
  responseFacebook = (response) => {
    console.log(response);
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Welcome to Financeshipfy</Title>
          <Description>
            Keep track of your stock and convert any currency on the fly
          </Description>
          {/* <FacebookLogin
            appId="832027567293623"
            autoLoad={true}
            fields="name,email,picture"
            //onClick={componentClicked}
            //callback={responseFacebook}
          /> */}
        </Container>

        <ArrowIcon style={{ fontSize: 50 }} />
      </Wrapper>
    );
  }
}

export { Homepage };

// const BouncyDiv = styled.div`
//   animation: 1s ${bounceAnimation};
// `;

const bounceAnimation = keyframes`${bounce}`;

const ArrowIcon = styled(ArrowDownwardIcon)`
  position: absolute;
  bottom: 6%;
  color: white;

  animation: infinite 3s ${bounceAnimation};
`;

const Title = styled.h2`
  color: white;
  font-family: "Roboto Slab", serif;
  font-size: 2em;
`;

const Description = styled.div`
  color: white;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  border: 0.5px solid;
  flex-diretion: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      323deg,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.01) 16.667%,
      rgba(46, 46, 46, 0.01) 16.667%,
      rgba(46, 46, 46, 0.01) 33.334%,
      rgba(226, 226, 226, 0.01) 33.334%,
      rgba(226, 226, 226, 0.01) 50.001000000000005%,
      rgba(159, 159, 159, 0.01) 50.001%,
      rgba(159, 159, 159, 0.01) 66.668%,
      rgba(149, 149, 149, 0.01) 66.668%,
      rgba(149, 149, 149, 0.01) 83.33500000000001%,
      rgba(43, 43, 43, 0.01) 83.335%,
      rgba(43, 43, 43, 0.01) 100.002%
    ),
    linear-gradient(
      346deg,
      rgba(166, 166, 166, 0.03) 0%,
      rgba(166, 166, 166, 0.03) 25%,
      rgba(240, 240, 240, 0.03) 25%,
      rgba(240, 240, 240, 0.03) 50%,
      rgba(121, 121, 121, 0.03) 50%,
      rgba(121, 121, 121, 0.03) 75%,
      rgba(40, 40, 40, 0.03) 75%,
      rgba(40, 40, 40, 0.03) 100%
    ),
    linear-gradient(
      347deg,
      rgba(209, 209, 209, 0.01) 0%,
      rgba(209, 209, 209, 0.01) 25%,
      rgba(22, 22, 22, 0.01) 25%,
      rgba(22, 22, 22, 0.01) 50%,
      rgba(125, 125, 125, 0.01) 50%,
      rgba(125, 125, 125, 0.01) 75%,
      rgba(205, 205, 205, 0.01) 75%,
      rgba(205, 205, 205, 0.01) 100%
    ),
    linear-gradient(
      84deg,
      rgba(195, 195, 195, 0.01) 0%,
      rgba(195, 195, 195, 0.01) 14.286%,
      rgba(64, 64, 64, 0.01) 14.286%,
      rgba(64, 64, 64, 0.01) 28.572%,
      rgba(67, 67, 67, 0.01) 28.572%,
      rgba(67, 67, 67, 0.01) 42.858%,
      rgba(214, 214, 214, 0.01) 42.858%,
      rgba(214, 214, 214, 0.01) 57.144%,
      rgba(45, 45, 45, 0.01) 57.144%,
      rgba(45, 45, 45, 0.01) 71.42999999999999%,
      rgba(47, 47, 47, 0.01) 71.43%,
      rgba(47, 47, 47, 0.01) 85.71600000000001%,
      rgba(172, 172, 172, 0.01) 85.716%,
      rgba(172, 172, 172, 0.01) 100.002%
    ),
    linear-gradient(
      73deg,
      rgba(111, 111, 111, 0.03) 0%,
      rgba(111, 111, 111, 0.03) 16.667%,
      rgba(202, 202, 202, 0.03) 16.667%,
      rgba(202, 202, 202, 0.03) 33.334%,
      rgba(57, 57, 57, 0.03) 33.334%,
      rgba(57, 57, 57, 0.03) 50.001000000000005%,
      rgba(197, 197, 197, 0.03) 50.001%,
      rgba(197, 197, 197, 0.03) 66.668%,
      rgba(97, 97, 97, 0.03) 66.668%,
      rgba(97, 97, 97, 0.03) 83.33500000000001%,
      rgba(56, 56, 56, 0.03) 83.335%,
      rgba(56, 56, 56, 0.03) 100.002%
    ),
    linear-gradient(
      132deg,
      rgba(88, 88, 88, 0.03) 0%,
      rgba(88, 88, 88, 0.03) 20%,
      rgba(249, 249, 249, 0.03) 20%,
      rgba(249, 249, 249, 0.03) 40%,
      rgba(2, 2, 2, 0.03) 40%,
      rgba(2, 2, 2, 0.03) 60%,
      rgba(185, 185, 185, 0.03) 60%,
      rgba(185, 185, 185, 0.03) 80%,
      rgba(196, 196, 196, 0.03) 80%,
      rgba(196, 196, 196, 0.03) 100%
    ),
    linear-gradient(
      142deg,
      rgba(160, 160, 160, 0.03) 0%,
      rgba(160, 160, 160, 0.03) 12.5%,
      rgba(204, 204, 204, 0.03) 12.5%,
      rgba(204, 204, 204, 0.03) 25%,
      rgba(108, 108, 108, 0.03) 25%,
      rgba(108, 108, 108, 0.03) 37.5%,
      rgba(191, 191, 191, 0.03) 37.5%,
      rgba(191, 191, 191, 0.03) 50%,
      rgba(231, 231, 231, 0.03) 50%,
      rgba(231, 231, 231, 0.03) 62.5%,
      rgba(70, 70, 70, 0.03) 62.5%,
      rgba(70, 70, 70, 0.03) 75%,
      rgba(166, 166, 166, 0.03) 75%,
      rgba(166, 166, 166, 0.03) 87.5%,
      rgba(199, 199, 199, 0.03) 87.5%,
      rgba(199, 199, 199, 0.03) 100%
    ),
    linear-gradient(
      238deg,
      rgba(116, 116, 116, 0.02) 0%,
      rgba(116, 116, 116, 0.02) 20%,
      rgba(141, 141, 141, 0.02) 20%,
      rgba(141, 141, 141, 0.02) 40%,
      rgba(152, 152, 152, 0.02) 40%,
      rgba(152, 152, 152, 0.02) 60%,
      rgba(61, 61, 61, 0.02) 60%,
      rgba(61, 61, 61, 0.02) 80%,
      rgba(139, 139, 139, 0.02) 80%,
      rgba(139, 139, 139, 0.02) 100%
    ),
    linear-gradient(
      188deg,
      rgba(227, 227, 227, 0.01) 0%,
      rgba(227, 227, 227, 0.01) 20%,
      rgba(105, 105, 105, 0.01) 20%,
      rgba(105, 105, 105, 0.01) 40%,
      rgba(72, 72, 72, 0.01) 40%,
      rgba(72, 72, 72, 0.01) 60%,
      rgba(33, 33, 33, 0.01) 60%,
      rgba(33, 33, 33, 0.01) 80%,
      rgba(57, 57, 57, 0.01) 80%,
      rgba(57, 57, 57, 0.01) 100%
    ),
    linear-gradient(90deg, hsl(237, 0%, 13%), hsl(237, 0%, 13%));
`;
