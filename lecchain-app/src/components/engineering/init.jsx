import React, { Component } from "react";
import learnmore from "./../../learnmore.png";

import "./init.css";

class EngineeringInit extends Component {
  render() {
    return (
      <div className="eng-init">
        <div className="init-content">
          <div className="content-title">ENGINEERING</div>
          <div className="content-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            ratione cumque accusamus quia ipsam numquam esse aperiam vero.
          </div>
          <div className="content-icon">
            <img src={learnmore} alt="learn-more" />
          </div>
        </div>
      </div>
    );
  }
}

export default EngineeringInit;
