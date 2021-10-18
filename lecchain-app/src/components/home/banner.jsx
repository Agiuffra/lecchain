import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar_v2";

import logo from "./../../lecchain-logo-negro.png";

import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class HomeBanner extends Component {
  render() { 
    return (
      <div className="home-banner">
        <div className="Logo">
          <a href="./">
            <img src={logo} alt="logo_lecchain" width="140px" />
          </a>
        </div>
        <Navbar color="black" idx="-1" />
      </div>
    );
  }
}

export default HomeBanner;
