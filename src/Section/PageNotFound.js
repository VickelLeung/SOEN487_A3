import React, { Component } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NotFound from "../images/notfound.jpeg";

class PageNotFound extends Component {
  render() {
    return (
      <Wrapper>
        <TitleContainers>
          <Title>ERROR! How did you get here?</Title>
          <SubTitle>404 Page not found</SubTitle>
          <Button variant="outlined">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Go back home
            </Link>
          </Button>
        </TitleContainers>
        <ImageContainer>
          <Images src={NotFound} />
        </ImageContainer>
      </Wrapper>
    );
  }
}

export { PageNotFound };

const Wrapper = styled.div`
  height: 100vh;
`;

const TitleContainers = styled.div`
  text-align: center;
  margin: 3% 0;
`;

const Title = styled.div`
  font-size: 2em;
  margin: 1% 0;
`;

const SubTitle = styled.div`
  font-size: 1.5em;
  margin: 1% 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-dirextion: row;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
`;
const Images = styled.img`
  object-fit: contains;
  height: 50vh;
  width: 50vw;
  border-radius: 5%;
  margin: 2% 0;
`;
