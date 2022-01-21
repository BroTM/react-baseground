import React, { Component } from "react";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isOk: true,
    };
  }
  setIsOk() {
    //don't
    /*  this.setState({isOk: !this.state.isOk});*/

    this.setState((prevState) => ({
      isOk: !prevState.isOk,
    }));
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setIsOk();
          }}
        >
          {this.state.isOk ? "True" : "False"}
        </button>
      </div>
    );
  }
}

export default Toggle;
