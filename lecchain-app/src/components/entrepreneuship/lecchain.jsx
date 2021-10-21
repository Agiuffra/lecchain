import React, { Component } from "react";

import "./lecchain.css";

class Lecchain extends Component {
  state = {
    mission: false,
    vision: false,
  };
  toggleMission = () => {
    this.setState({
      mission: !this.state.mission,
      vision: false,
    });
  };
  toggleVision = () => {
    this.setState({
      vision: !this.state.vision,
      mission: false,
    });
  };
  render() {
    return (
      <div className="entrep-lecchain">
        <div className="lecchain-title">Lecchain</div>
        <div className="lecchain-content">
          <div className="lec-content-intro">
            <b>Lecchain</b> seeks to be the{" "}
            <b>first step towards the production of more accessible vaccines</b>{" "}
            for the country and for all those where maintaining cold chains is
            difficult and expensive.
          </div>
          <div className="lec-content-sect">
            <div className="sect-mission" onClick={this.toggleMission}>
              MISSION
            </div>
            <div className="sect-vision" onClick={this.toggleVision}>
              VISION
            </div>
          </div>
          <div className="lec-content-info">
            <div className={this.state.mission ? "blocky" : "nony"}>
              Our mission is to design and produce an oral vaccine candidate
              against SARS-CoV-2 that can support high temperatures without
              requiring a cold chain during storage and distribution.
            </div>
            <div className={this.state.vision ? "blocky" : "nony"}>
              Our vision is to be one of the leaders to provide a thermostable
              vaccine formulation that can be easily delivered to the most
              significant number of people in Latinamerican countries, where
              maintaining cold chains is difficult and costly.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lecchain;
