import React, { Component } from "react";

import "./infographic.css";

class Infographic extends Component {
  render() {
    return (
      <div className="proj-info">
        <div className="info-title">
          Education and Communication Infographic
        </div>
        <div className="info-slogn-a">
          <b>Lecchain</b> has many advantages that differentiate it from current
          vaccines. From its thermotolerance to its modular design for producing
          novel vaccines. This infographic has been made to show a visual
          representation of what <b>Lecchain</b> is and what makes it special.
        </div>
        <div className="info-infography">
          <img
            src={process.env.PUBLIC_URL + "/project/INFOGRAFIA.png"}
            alt=""
            width="80%"
          />
        </div>
        <div className="info-cred">
          <b className="cred-title">Credits</b>
          <div className="cred-auths">
            <div>
              <b>Graphic designer: </b> Maria De Fátima Salazar
            </div>
            <div>
              <b>Graphic designer: </b> Allison Aldoradin
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Infographic;
