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
      <div className="proj-banner">
        <div className="lang-sel">
          <div className="lang-eng">English</div>
          <div className="lang-esp">Español</div>
          <div className="lang-que">Quechua</div>
        </div>
        <div className="project-banner">
          <div className="Logo">
            <a href="/">
              <img src={logo} alt="logo_lecchain" width="150px" />
            </a>
          </div>
          <Navbar idx="1" project="1" />
        </div>
      </div>
    );
  }
}

export default ProjectBanner;
