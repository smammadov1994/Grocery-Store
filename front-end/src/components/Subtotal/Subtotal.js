import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
class Subtotal extends Component {
  state = {};
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}
export default Subtotal;
