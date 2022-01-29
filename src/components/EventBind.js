import React, { Component } from "react";
//There are four approches
//1 - binding in render //not one to use because performance implecation
//2 - arrow fun in render // probably easiest way
//3 - binding in class constructor //react doc suggests approch 3 & 4
//4 - class property as arraw fun
export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({ message: "Goodbye!" });
  //   console.log(this);
  // }

  clickHandler = () => {
    this.setState({ message: "Goodbye!" });
    console.log(this);
  };
  render() {
    return (
      <div>
        {this.state.message}
        <br />
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
