import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar_v2";
import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class HomeBanner extends Component {
  /*
    <h1>Lecchain</h1>
    */
  render() {
    return (
      <div class="home-banner">
        <Navbar idx="0" />
        <div class="home-banner-text"></div>
      </div>
    );
  }
}

export default HomeBanner;
