import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    //this can be referenced through out the component
    this.inputRef = React.createRef();

    //callback ref
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = (event) => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="name" ref={this.inputRef} />
        <br />
        <input type="email" placeholder="email" ref={this.setCbRef} />
        <br />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
