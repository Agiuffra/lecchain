import React, { Component } from "react";

import "./ihpractices.css";

class IHPractices extends Component {
  render() {
    return (
      <div className="humprac-ihpract">
        <div className="ihpract-title">Integrated Human Practices</div>
        <div className="ihpract-text">
          To fully understand the problem and design a plan to address it, our
          team utilized Lecchain’s human-centered design process which leads to
          the integration with key stakeholders (see Community) and end users
          throughout the project lifecycle. To do this, with each new idea and
          feedback we cycled iteratively through all the human process pathway.
        </div>
        <div className="ihpract-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/iteracion.png"}
            alt=""
            width="700px"
          />
        </div>
      </div>
    );
  }
}

export default IHPractices;
