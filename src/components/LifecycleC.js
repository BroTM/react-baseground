import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "BTMS",
    };
    console.log("LifecycleC constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleC componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleC shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleC getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleC componenetDidUpdate");
  }
  changeState = () => {
    this.setState({ name: "Codevolution" });
  };
  render() {
    console.log("lifetcycleC render");
    // return <div>LifecycleC</div>;
    return (
      <div>
        Lifecycle C<button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleC;
