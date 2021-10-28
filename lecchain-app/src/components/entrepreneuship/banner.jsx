import React, { Component } from "react";
import Navbar from "../general/navbar_v2";

import logo from "./../../lecchain-logo-oscuro.png";

import "./banner.css";

class EntrepBanner extends Component {
  render() {
    return (
      <div className="project-banner">
        <div className="Logo">
          <a href="/">
            <img src={logo} alt="logo_lecchain" width="150px" />
          </a>
        </div>
        <Navbar idx="4" entrepreneurship="1" />
      </div>
    );
  }
}

export default EntrepBanner;
