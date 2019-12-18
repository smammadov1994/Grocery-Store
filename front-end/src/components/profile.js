import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navigation from "./navigation.js";
import MyProducts from "./MyProducts";
import ShoppingCart from "./ShoppingCart";
import products from "../seed/seed.js";
import "../profile.css";
import Image from "../images/plant4.png";
import Explore from "./explore.js";
import Benefits from "./benefits.js";
import Checkout from "./checkout.js";
import { Redirect } from "react-router";
import Orange from "../images/orane1.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
const baseURL = "http://localhost:3006";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      fruits: [],
      errors: {},
      products: products,
      renderCart: false,
      redirect: false,
      total: 0,
      ready: false,
      data: null
    };
    this.logOut = this.logOut.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.readyCheckout = this.readyCheckout.bind(this);
  }
  addToCart(product) {
    this.setState({
      fruits: [product, ...this.state.fruits],
      redirect: true
    });
  }

  async getProfile(e) {
    const response = await axios
      .get(`${baseURL}/user/profile`, {})
      .then(response => {
        console.log("hello");
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentWillMount() {
    localStorage.getItem("fruits") &&
      this.setState({
        fruits: JSON.parse(localStorage.getItem("fruits"))
      });
  }

  componentDidMount() {
    this.setState({
      fruits: this.state.fruits
    });
    if (localStorage.getItem("fruits")) {
      this.fetchData();
    } else {
      console.log("using data from localstorage");
    }
  }
  fetchData() {}

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("fruits", JSON.stringify(nextState.fruits));
    localStorage.setItem("fruitsDate", Date.now());
  }

  componentDidMount() {
    console.log("PROFILE IS RENDERED");
    this.getProfile();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      fullname: decoded.fullname,
      email: decoded.email
    });
  }
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  removeItems(e) {
    e.preventDefault();
    localStorage.removeItem("fruits");
    localStorage.removeItem("disablePromoButton");
    localStorage.removeItem("total");
    this.props.history.push(`/auth`);
  }

  readyCheckout(e) {
    this.setState({
      ready: true
    });
  }

  render() {
    return (
      <div className="container-profile">
        <Navigation fullname={this.state.fullname} logOut={this.logOut} />
        {this.state.ready === false ? (
          <div className="avaliable">
            Recent Inventory:
            <div className="main-screen">
              <ShoppingCart
                fruits={this.state.fruits}
                className="shopping-cart"
              />
            </div>
          </div>
        ) : null}
        {this.state.ready === false ? (
          <Explore
            products={this.state.products}
            addToCart={this.addToCart}
            readyCheckout={this.readyCheckout}
            fruits={this.state.fruits}
          />
        ) : (
          <div className="explore">
            <div className="explore-benefits">
              <Benefits />
            </div>

            <Checkout
              fruits={this.state.fruits}
              removeItems={this.removeItems}
            />
          </div>
        )}
        <div
          className={this.state.ready === false ? "footer" : "hidden-footer"}
        >
          <h1 className="footer-text">Valhalla Co.</h1>
          <p className="footer-text">A store ran by one man: Seymur Mammadov</p>
          <p className="footer-text">Copyright &copy;2019</p>
        </div>
      </div>
    );
  }
}

export default Profile;
