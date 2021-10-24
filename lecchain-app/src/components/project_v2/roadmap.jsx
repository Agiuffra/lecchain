import React, { Component } from "react";

import "./roadmap.css";

class Roadmap extends Component {
  render() {
    return (
      <div className="proj-rdmp">
        <div className="rdmp-title">Roadmap</div>
        <div className="rdmp-intro">
          UTEC-Peru has traveled a long way through the competition so far. We
          still have a long way to go to make Lecchain come true. However, in
          the following roadmap we summarize all our journey in the iGEM Design
          League from the state of problem to the final proposal. Join us and
          start walking on the Lecchain ‘s road!
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
