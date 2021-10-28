import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar_v2";

import logo from "./../../lecchain-logo-oscuro.png";

import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class EngineeringBanner extends Component {
  render() {
    return (
      <div className="engineering-banner">
        <div className="Logo">
          <a href="/">
            <img src={logo} alt="logo_lecchain" width="150px" />
          </a>
        </div>
        <Navbar idx="2" engineering="1" />
      </div>
    );
  }
}

export default EngineeringBanner;
