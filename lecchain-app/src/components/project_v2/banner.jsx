import React, { Component } from "react";
import BannerAnim from "rc-banner-anim";
import Navbar from "../general/navbar_v2";

import logo from "./../../lecchain-logo-oscuro.png";

import "./banner.css";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class ProjectBanner extends Component {
  constructor(props) {
    super(props);
  }

  handleLangChangeES = () => {
    var lang = "ES";
    this.props.onSelectLanguage(lang);
  };

  handleLangChangeEN = () => {
    var lang = "EN";
    this.props.onSelectLanguage(lang);
  };

  handleLangChangeQU = () => {
    var lang = "QU";
    this.props.onSelectLanguage(lang);
  };

  render() {
    return (
      <div className="proj-banner">
        <div className="project-banner">
          <div className="Logo">
            <a href="/">
              <img src={logo} alt="logo_lecchain" width="150px" />
            </a>
          </div>
          <Navbar idx="1" project="1" />
        </div>
        <div className="lang-sel">
          <div className="lang-eng" onClick={this.handleLangChangeEN}>
            English
          </div>
          <div className="lang-esp" onClick={this.handleLangChangeES}>
            Español
          </div>
          <div className="lang-que" onClick={this.handleLangChangeQU}>
            Quechua
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectBanner;
