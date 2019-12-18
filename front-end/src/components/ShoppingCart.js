import React, { Component } from "react";

class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        {this.props.fruits.slice(0, 6).map(cartItem => {
          return (
            <div className="shopping-item">
              <img src={cartItem.image} height="44" className="fruit-image" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShoppingCart;
