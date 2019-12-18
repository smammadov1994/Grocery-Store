import React, { Component } from "react";
import { Button } from "react-bootstrap";
class removeItems extends Component {
  render() {
    return (
      <Button onClick={this.props.removeItems} width="200">
        Restart
      </Button>
    );
  }
}

export default removeItems;
