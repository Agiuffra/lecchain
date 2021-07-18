import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import Navbar from "./../general/navbar";
import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class HomeBanner extends Component {
  render() {
    return (
      <div class="home-banner">
        <Navbar />
        <div class="home-banner-text">
          <h1>Lecchain</h1>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
