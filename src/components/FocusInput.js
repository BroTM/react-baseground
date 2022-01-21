import React, { Component } from "react";
import Input from "./Input";

export class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  handleClick = () => {
    this.componentRef.current.focusInput();
    console.log(this.componentRef.current);
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.handleClick}>Focus input</button>
      </div>
    );
  }
}

export default FocusInput;
