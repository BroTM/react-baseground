import React, { Component } from "react";
import QRious from "qrious";
import { qr_effect } from "./Constants";

class QRPageUsingQrious extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrvalue:
        "https://pvcarrental.com/fuelapp?company=something&station=something",
    };
  }

  componentDidMount() {
    console.log("LifecyleA componentDidMount");
    var qr = new QRious({
      element: document.getElementById("qr"),
      ...qr_effect,
    });
    qr.value = this.state.qrvalue;
  }
  handleChange = (event) => {
    this.setState({ qrvalue: event.target.value });
    // var qr = new QRious({
    //   element: document.getElementById("qr"),
    //   ...qr_effect,
    // });
    // qr.value = this.state.qrvalue;
  };
  render() {
    console.log("render");
    return (
      <>
        <input
          name="qr_value"
          value={this.state.qrvalue}
          onChange={this.handleChange}
          style={{ width: "100%" }}
        />
        <canvas id="qr"></canvas>
      </>
    );
  }
}

// function QRPageUsingQrious() {
//   var css = {
//     padding: 25,
//     level: "M",
//     size: 300,
//     background: "white",
//   };
//   var qr = new QRious({
//     element: document.getElementById("qr"),
//     // value:
//     //   "https://pvcarrental.com/fuelapp?company=something&station=something",
//     ...css,
//   });
//     console.log('return');
//   qr.value =
//     "https://pvcarrental.com/fuelapp?company=something&station=something";
//     return (
//     <>
//       <canvas id="qr"></canvas>
//     </>
//   );
// }

export default QRPageUsingQrious;
