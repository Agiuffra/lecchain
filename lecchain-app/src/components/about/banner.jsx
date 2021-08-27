import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar";
import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class AboutBanner extends Component {
  render() {
    return (
      <div class="about-banner">
        <Navbar idx="2" />
        <div class="about-banner-text"></div>
      </div>
    );
  }
}

export default AboutBanner;
