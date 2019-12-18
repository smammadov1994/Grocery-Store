import React, { Component } from "react";
import "../shopping.css";

class MyProducts extends Component {
  render() {
    return (
      <div className="my-products">
        {this.props.products.map(product => {
          return (
            <div
              onClick={() => this.props.addToCart(product)}
              className="product"
            >
              <div className="card">
                <h1 className="product-info">{product.description}</h1>
                <img src={product.image} className="product-image" />
                <p className="product-info">${product.unit_price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyProducts;
