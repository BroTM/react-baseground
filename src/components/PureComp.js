import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure com render");
    return <div>This is pure component {this.props.name}</div>;
  }
}

export default PureComp;
