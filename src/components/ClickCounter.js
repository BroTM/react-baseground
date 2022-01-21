import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // handleClick = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };
  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name}Click {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
