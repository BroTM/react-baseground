import React, { Component } from "react";

class CounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    //will be display the returned component
    //function call like this.props.render()
    //can call this.props.children instead of render-props
    return (
      //   <div>{this.props.render(this.state.count, this.incrementCount)}</div>
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default CounterTwo;
