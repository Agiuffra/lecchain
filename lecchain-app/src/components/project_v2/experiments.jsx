import React, { Component } from "react";

import "./experiments.css";

class Experiments extends Component {
  render() {
    return (
      <div className="proj-exp">
        <div className="exp-title">Experiments</div>
        <div className="exp-desgn">
          <div className="desgn-title">Experimental Design</div>
          <div className="desgn-cont"></div>
        </div>
        <div className="exp-metho">
          <div className="metho-title">Methodology</div>
        </div>
        <div className="exp-proto">
          <div className="proto-title">Protocols</div>
        </div>
      </div>
    );
  }
}

export default Experiments;
