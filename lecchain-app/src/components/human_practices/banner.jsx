import React, { Component } from "react";
import Navbar from "../general/navbar_v2";
import logo from "./../../lecchain-logo-blanco.png";
import "./banner.css";

class HumPracBanner extends Component {
  render() {
    return (
      <div className="humprac-banner">
        <div className="Logo">
          <a href="./">
            <img src={logo} alt="logo_lecchain" width="150px" />
          </a>
        </div>
        <Navbar idx="3" humanpractices="1" dark="1" />
      </div>
    );
  }
}

export default HumPracBanner;
