import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCodeDiscount extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      array: [],
      promoString: null,
      data: null,
      code: null
    };
  }

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form className="discount-forum">
                  <FormGroup controlId="formInlineName">
                    <FormControl
                      type="text"
                      placeholder={this.state.promoString}
                      value={this.props.promoCode}
                      onChange={this.props.handleChange}
                    />
                  </FormGroup>
                  <Button
                    block
                    bsStyle="success"
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(PromoCodeDiscount);
