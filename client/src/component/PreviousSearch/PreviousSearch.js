import React, { PureComponent } from "react";

import styled from "styled-components";

class PreviousSearch extends PureComponent {
  state = { data: {} };
  componentDidMount = () => {
    console.log(this.state.data);
  };

  componentDidUpdate = () => {
    let get_history = localStorage.getItem("user_history");
    console.log(get_history);
    // if (get_history.length > 0) {
    this.setState({ data: get_history });
    // }
  };

  render() {
    return (
      <Wrapper>
        {/* <Title>Below are your Previous Search</Title>
        {this.state.data.length > 0 ? <p>test</p> : null}
        <p>{this.state.data.toCurrency}</p> */}
      </Wrapper>
    );
  }
}

export { PreviousSearch };

const Wrapper = styled.div``;

const Title = styled.div``;
