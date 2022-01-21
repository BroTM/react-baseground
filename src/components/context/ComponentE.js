import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  //limitation
  //1. only work in class component
  //2. can only subscribe to a single context using context type
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}
// ComponentE.contextType = UserContext;
export default ComponentE;
