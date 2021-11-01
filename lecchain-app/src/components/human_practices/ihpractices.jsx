import React, { Component } from "react";

import "./ihpractices.css";

class IHPractices extends Component {
  render() {
    return (
      <div className="humprac-ihpract">
        <div className="ihpract-title">Integrated Human Practices</div>
        <div className="ihpract-text">
          To fully understand the problem and design a plan to address it, our
          team utilized <b> Lecchain’s human-centered design process </b> which leads to
          the integration with key <b> stakeholders </b> (see <b> Community</b>) and <b> end users
          throughout the project lifecycle</b>. To do this, with each new idea and
          feedback we cycled iteratively through all the human process pathway.
        </div>
        <div className="ihpract-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/iteracion.png"}
            alt=""
            width="900px"
          />
        </div>
      </div>
    );
  }
}

export default IHPractices;
