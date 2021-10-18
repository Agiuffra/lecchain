import React, { Component } from "react";
import Timeline from "../home/timeline";
import sign from "./../../sign.png";
import "./problem.css";

class Problem extends Component {
  render() {
    return (
      <div className="home-problem">
        <div className="problem-text">
          <img src={sign} alt="Sign" className="problem-image" />
          <div className="problem-body">
            Viruses that "jump" from animals 
            to human have caused several
            pandemics throughout history.
          </div>
        </div>
        <div className="problem-timeline">
          <Timeline />
        </div>
      </div>
    );
  }
}

export default Problem;
