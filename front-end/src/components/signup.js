import React, { Component } from "react";
import axios from "axios";
import "../App.css";
const baseURL = "http://localhost:3006";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      email: "",
      password: "",
      hasAgreed: false,
      fruits: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "fruits" ? this.state.fruits : target.value;
    let name = target.name;

    this.setState({ [name]: value });
    console.log(name);
  }
  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      fruits: []
    });
    console.log(this.state.fruits);
    const response = await axios
      .post(`${baseURL}/user/register`, {
        fullname: this.state.fullname,
        password: this.state.password,
        email: this.state.email,
        hasAgreed: this.state.hasAgreed,
        fruits: this.state.fruits
      })
      .then(response => {
        this.props.history.push("/sign-in");
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      fullname: "",
      email: "",
      password: "",
      hasAgreed: false,
      fruits: []
    });
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="fruits">
              Favorite fruit?
            </label>
            <input
              type="Favorite Fruit?"
              id="fruit"
              className="FormField__Input"
              placeholder="Favorite Fruit?"
              name="fruits"
              value={this.state.fruits}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
              I agree all statements in
              <a
                href="#"
                className="Formfield__TermsLink"
                style={{ color: "white", padding: "5px" }}
              >
                <span className="terms_and_conditions">terms of service</span>
              </a>
            </label>
          </div>

          <div className="FormField">
            <button
              className="FormField__Button mr-20"
              onChange={this.handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
