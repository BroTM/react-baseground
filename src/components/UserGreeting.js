import React, { Component } from "react";
//There are four approches
export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome BTMS</div>;
    /*
        return this.state.isLoggedIn ? (
        <div>Welcome BTMS</div>
        ) : (
        <div>Welcome Guest</div>
        );
    */
    /* let message;
        if (this.state.isLoggedIn) {
        message = <div>Welcome BTMS</div>;
        } else {
        message = <div>Welcome Guest</div>;
        }
        return <div>{message}</div>;
    */
    /*
        if (this.state.isLoggedIn) {
        return <div>Welcome BTMS</div>;
        } else {
        return <div>Welcome Guest</div>;
        }
    */
  }
}

export default UserGreeting;
