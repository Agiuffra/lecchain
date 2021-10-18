import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar_v2";

import logo from "./../../lecchain-logo-oscuro.png";

import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class ProjectBanner extends Component {
  render() {
    return (
      <div className="project-banner">
        <div className="Logo">
          <a href="./">
            <img src={logo} alt="logo_lecchain" width="140px" />
          </a>
        </div>
        <Navbar idx="1" />
      </div>
    );
  }
}

export default ProjectBanner;
