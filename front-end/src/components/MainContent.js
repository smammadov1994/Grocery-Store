import FrontLogin from "./front-login-view";
import React, { Component } from "react";
import Profile from "./profile";
import SignUpForm from "./signup";
import SignInForm from "./signin";
import Landing from "./landing.js";
import Shopping from "./ShoppingCart.js";
import Checkout from "./checkout.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/auth" component={FrontLogin} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/user/cart" component={Shopping} />
          <Route exact path="/user/checkout" component={Checkout} />
        </Router>
      </>
    );
  }
}

export default Main;
