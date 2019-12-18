import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: null
    };
  }

  componentWillMount() {
    localStorage.getItem("fruits") &&
      this.setState({
        data: JSON.parse(localStorage.getItem("fruits"))
      });
  }

  componentDidMount() {
    this.setState({
      data: this.props.fruits
    });
    if (localStorage.getItem("fruits")) {
      this.fetchData();
    } else {
      console.log("using data from localstorage");
    }
  }
  fetchData() {}

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("fruits", JSON.stringify(nextState.data));
    localStorage.setItem("fruitsDate", Date.now());
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() =>
            this.setState({
              open: !this.state.open
            })
          }
        >
          {this.state.open === false ? "See" : "Hide "} item details
          {this.state.open === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.open}>
          <Media className="media-show">
            {this.state.data.map(cartItem => {
              return (
                <div className="each-item">
                  <img
                    height={30}
                    src={cartItem.image}
                    className="checkout-fruit-image"
                  />
                  <Media.Body>
                    <p className="checkout-fruit-details">
                      {cartItem.description}
                      <p>{`$${cartItem.unit_price}`}</p>
                    </p>
                  </Media.Body>
                </div>
              );
            })}
          </Media>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
