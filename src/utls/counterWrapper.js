import React from "react";

const CounterWrapper = (OldComp ,iteration = 1) => {
  class newComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increaseCounter = ()=> {
      this.setState({
        count: this.state.count + iteration,
      });
    }
    render() {
      return (
        <OldComp
          count={this.state.count}
          increaseCounter={this.increaseCounter}
        />
      );
    }
  }
  return newComp
};

export default CounterWrapper;
