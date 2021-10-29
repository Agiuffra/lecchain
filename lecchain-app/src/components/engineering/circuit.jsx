import React, { Component } from "react";
import Research from "./popups/research";
import Optimization from "./popups/optimization";

import "./circuit.css";

class Circuit extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    research: false,
    optimization: false,
  };
  toggleResearch = () => {
    this.setState({
      research: !this.state.research,
    });
  };
  toggleOptimization = () => {
    this.setState({
      optimization: !this.state.optimization,
    });
  };
  render() {
    return (
      <div className="eng-circuit">
        <div className="circuit-title">Design and Results</div>
        <div className="circuit-sect">
          <div className="circuit-txt">
            <b>Lecchain</b>‘s engineering cycle is based on the steps of{" "}
            <b>design, build, test and learn</b>. One of the main parts of this
            cycle is the design aspect. Hence, in order to deeply go into this
            part we made a slight modification to the common diagram and
            proposed a design part based on a diamont diagram. This will clearly
            explain how our{" "}
            <b>
              proposal research has been iterated a lot of times throughout
              steps of discovery and definition
            </b>{" "}
            and guide us to <b>propose</b> an initial solution. After this,
            steps of <b>optimization</b> which involve{" "}
            <b>computational approach</b> of the <b>chimeric antigen</b> are
            developed to <b>propose a final solution</b>.
          </div>
          <div className="circuit-img">
            <img
              src={process.env.PUBLIC_URL + "/engineering/design.png"}
              alt=""
              width="800px"
            />
            <div className="img-rsrch-btn" onClick={this.toggleResearch}></div>
            <div
              className="img-optim-btn"
              onClick={this.toggleOptimization}
            ></div>
          </div>
        </div>
        <div className="circuit-cred">
          <b>Credits</b>
          <div className="crdts-dir">
            <b>Graphic Designer: </b>Maria de Fátima Salazar
          </div>
          <div className="crdts-edit">
            <b>Graphic Designer: </b>Allison Aldoradin
          </div>
        </div>
        {this.state.research ? <Research toggle={this.toggleResearch} /> : null}
        {this.state.optimization ? (
          <Optimization toggle={this.toggleOptimization} />
        ) : null}
      </div>
    );
  }
}

export default Circuit;
