import React, { Component } from "react";
import person from "./../../person-wearing-mask.png";
import "./init.css";

class Initial extends Component {
  render() {
    return (
      <div className="about-init">
        <div className="init-text">
          <div className="text-top">WHO WE</div>
          <div className="text-bot">ARE.</div>
        </div>
        <div className="init-img">
          <img src={person} alt="Person" className="init-image" />
        </div>
      </div>
    );
  }
}

export default Initial;
