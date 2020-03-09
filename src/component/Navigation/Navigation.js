import React, { PureComponent } from "react";
import styled from "styled-components";

class Navigation extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Links>Homepage</Links>
        <Links>Convert Currency</Links>
        <Links>List of Currency</Links>
      </Wrapper>
    );
  }
}

export { Navigation };

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  padding: 2% 0;
  align-items: center;
  justify-content: center;
`;

const Links = styled.a`
  border: 1px solid black;
  margin: 0 2%;
  padding: 1% 3%;

  &:hover {
    color: white;
    background: black;
    transition: color 2s;
    transition: background 2s;
  }
`;
