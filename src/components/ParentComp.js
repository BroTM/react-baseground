import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Vishwas" });
    }, 2000);
  }
  render() {
    console.log("******************** Parent comp render ********************");
    return (
      <div>
        Parent component
        {/* <RegularComp name={this.state.name} /> */}
        {/* </RegularComp> */}
        {/* <PureComp name={this.state.name} /> */}
        {/* </PureComp> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
