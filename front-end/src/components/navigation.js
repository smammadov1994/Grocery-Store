import React, { Component } from "react";
import Logo from "../images/plant4.png";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <img src={Logo} alt="logo" height="100" className="logo" />
        <div className="name-user">{this.props.fullname}</div>
        <div className="logout" onClick={this.props.logOut}>
          Logout
        </div>
      </div>
    );
  }
}

export default Navigation;
