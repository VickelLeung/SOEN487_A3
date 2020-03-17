import React, { PureComponent } from "react";
import styled from "styled-components";

class HistoryCurrency extends PureComponent {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <Container>
          <Box>
            <h2>Currency</h2>
          </Box>

          <Box>
            <h2>Currency</h2>
          </Box>
        </Container>
      </div>
    );
  }
}

export { HistoryCurrency };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid black;
`;
