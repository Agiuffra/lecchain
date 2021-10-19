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
            <img src={logo} alt="logo_lecchain" width="150px" />
          </a>
        </div>
        <Navbar idx="0" about="1" dark="1" />
      </div>
    );
  }
}

export default AboutBanner;
