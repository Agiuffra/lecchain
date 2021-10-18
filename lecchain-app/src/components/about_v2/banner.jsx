import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar_v2";

import logo from "./../../lecchain-logo-blanco.png";

import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class AboutBanner extends Component {
  render() {
    return (
      <div className="about-banner">
        <div className="Logo">
          <a href="./">
            <img src={logo} alt="logo_lecchain" width="140px" />
          </a>
        </div>
        <Navbar color="white" idx="0" />
      </div>
    );
  }
}

export default AboutBanner;
