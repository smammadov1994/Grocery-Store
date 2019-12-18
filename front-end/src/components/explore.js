import React, { Component } from "react";
import LogoPlain from "../images/plant3.png";
import Products from "./MyProducts.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
class Explore extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="explore">
          <div className="explore-1">
            <button
              className="research"
              onClick={() => this.props.readyCheckout()}
            >
              <h2>Checkout</h2>
            </button>
          </div>
          <div className="explore-2">
            <Products
              products={this.props.products}
              addToCart={this.props.addToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
