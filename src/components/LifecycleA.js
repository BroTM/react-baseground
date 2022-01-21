import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "BTMS",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecyleA componentDidMount");
  }

  render() {
    console.log("lifetcycleA render");
    // return <div>LifecycleA</div>;
    return (
      <div>
        Lifecycle A
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
