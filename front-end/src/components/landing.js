import React, { Component } from "react";
import "../landing.css";
import Sample from "../video.mp4";
import Image from "../images/plant4.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="intro-block">
          <div className="left-info">
            <h1 className="left-info-1">
              <img src={Image} height="90" width="90" className="one-in-five" />
            </h1>
            <h2 className="left-info-2">Once a garden dared to grow.</h2>
            <Link to="/auth" className="get-started">
              Harvest
            </Link>
            <video className="video" autoPlay loop muted>
              <source src={Sample} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
