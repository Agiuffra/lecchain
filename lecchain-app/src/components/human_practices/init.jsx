import React, { Component } from "react";
import person from "./../../standing-person.png";

import "./init.css";

class HumPracInit extends Component {
  render() {
    return (
      <div className="humprac-init">
        <div className="hp-init-img">
          <img src={person} alt="" className="img-image" height="540" />
        </div>
        <div className="hp-init-txt">
          <div>HUMAN</div>
          <div>PRACTICES</div>
        </div>
      </div>
    );
  }
}

export default HumPracInit;
