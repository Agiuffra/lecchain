import React, { Component } from "react";
import icon from "./../../presenting-person.png";

import "./init.css";

class EntrepInit extends Component {
  render() {
    return (
      <div className="entrep-init">
        <div className="entr-init-img">
          <img src={icon} alt="" height="540" />
        </div>
        <div className="entr-init-txt">
          <div>ENTRADA</div>
          <div>PRENEUR</div>
          <div>SHIP</div>
        </div>
      </div>
    );
  }
}

export default EntrepInit;
