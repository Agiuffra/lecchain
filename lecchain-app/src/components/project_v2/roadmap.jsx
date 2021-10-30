import React, { Component } from "react";

import "./roadmap.css";

class Roadmap extends Component {
  render() {
    return (
      <div className="proj-rdmp">
        <div className="rdmp-title">Roadmap</div>
        <div className="rdmp-intro">
          <b>UTEC-Peru</b> has traveled a{" "}
          <b>long way through the competition so far</b>. We still have a long
          way to go to make <b>Lecchain</b> come true. However, in the following
          roadmap we summarize <b>all our journey in the iGEM Design League</b>{" "}
          in the steps of <b>design</b>. Join us and start walking on the{" "}
          <b>Lecchain</b>‘s road!
        </div>
        <div className="rdmp-img">
          <img
            src={process.env.PUBLIC_URL + "/project/ROADMAP.png"}
            alt=""
            width="900px"
            className="rdmp-img-img"
            onClick={this.toggleImage}
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

export default Roadmap;
