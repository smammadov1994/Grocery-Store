import React, { Component, useEffect } from "react";
import { Container } from "react-bootstrap";
import Subtotal from "./Subtotal/Subtotal.js";
import EstimatedTotal from "./EstimatedTotal/EstimatedTotal.js";
import ItemDetails from "./ItemDetails/ItemDetails.js";
import PromoCode from "./PromoCode/PromoCode.js";
import products from "../seed/seed.js";
import { connect } from "react-redux";
import { handleChange } from "../actions/promoCodeActions";
import Generate from "./promoGenerate/promoGenerate.js";
import Remove from "./removeItems/removeItems.js";
import "../profile.css";
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      estimatedTotal: 0,
      disablePromoButton: false,
      products: products
    };
    this.countA = this.countA.bind(this);
    this.countC = this.countC.bind(this);
    this.calcBoth = this.calcBoth.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.props.handleChange(e);
  };
  countA() {
    let newPrice = 0;
    let counterA = [];
    this.props.fruits.map(item => {
      if (item.id == "A") {
        let countItemIdA = item.id.split().toString();
        counterA.push(countItemIdA);
        console.log(counterA);
        if (counterA.length >= 4) {
          newPrice += item.unit_price - 0.25 * counterA.length;
          console.log(newPrice);
        } else {
          newPrice += item.unit_price;
        }
      }
    });
    return newPrice;
  }
  countC() {
    let newPrice = 0;
    let counterC = [];
    this.props.fruits.map(item => {
      if (item.id == "C") {
        console.log(newPrice);
        let countItemIdC = item.id.split().toString();
        counterC.push(countItemIdC);
        console.log(counterC);
        if (counterC.length >= 6) {
          newPrice += item.unit_price - 0.25 * counterC.length;
          console.log(newPrice);
        } else {
          newPrice += item.unit_price;
        }
      }
    });
    return newPrice;
  }

  calcBoth(a, b) {
    let new_price = a + b;
    console.log(new_price);
    this.setState({
      total: new_price
    });
    console.log(this.state.total);
  }

  componentDidMount = () => {
    let a = this.countA();
    let b = this.countC();
    this.calcBoth(a, b);
    console.log(this.state.total);
    this.setState(
      { taxes: this.state.total + this.state.PickupSavings },
      function() {
        this.setState({
          estimatedTotal: this.state.total
        });
      }
    );
    console.log(this.state.estimatedTotal);
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal - 2 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    } else if (this.props.promoCode === "LUCKY") {
      this.setState(
        {
          estimatedTotal:
            this.state.estimatedTotal - (this.state.estimatedTotal - 1)
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    } else if (this.props.promoCode === "BANANAMANIA") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal - 22 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    } else if (this.props.promoCode === "CRANBERRYPOWA") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal - 30 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    } else if (this.props.promoCode === "ANAPPLEADAY") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal - 6 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    } else if (this.props.promoCode === "HOHOHO") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal - 15 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    } else if (this.props.promoCode === "FORTHELOVEOFFRUITS") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal - 1 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  componentWillMount() {
    localStorage.getItem("disablePromoButton", "total") &&
      this.setState({
        disablePromoButton: JSON.parse(
          localStorage.getItem("disablePromoButton")
        ),
        total: JSON.parse(localStorage.getItem("total"))
      });
  }

  componentDidMount() {
    this.setState({
      disablePromoButton: this.state.disablePromoButton,
      total: this.state.total
    });
    if (localStorage.getItem("disablePromoButton")) {
      this.fetchData();
    } else if (localStorage.getItem("total")) {
      this.fetchData();
    } else {
      console.log("using data from localstorage");
    }
  }
  fetchData() {}

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "disablePromoButton",
      JSON.stringify(nextState.disablePromoButton)
    );
    localStorage.setItem("total", JSON.stringify(nextState.total));
    localStorage.setItem("disablePromoButtonDate", Date.now());
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <Remove removeItems={this.props.removeItems} />
          <ItemDetails
            price={this.state.estimatedTotal.toFixed(2)}
            fruits={this.props.fruits}
            delete={this.props.deleteFromCart}
          />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
            fruits={this.props.fruits}
            handleChange={this.handleChange}
            newTotal={this.state.newTotal}
          />
          <Generate isDisabled={this.state.disablePromoButton} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(Checkout);
