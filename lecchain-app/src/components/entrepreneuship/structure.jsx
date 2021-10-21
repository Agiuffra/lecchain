import React, { Component } from "react";

import "./structure.css";

class OrgStructure extends Component {
  render() {
    return (
      <div className="entrep-orgstrct">
        <div className="orgstrct-title">
          <div>Organizational</div>
          <div>Structure</div>
        </div>
        <div className="orgstrct-content">
          <div className="os-content-intro">
            As a teamwork organization, <b>Lecchain</b> will have a{" "}
            <b>flat organization</b> structure, which means that there is{" "}
            <b>no centralization and favors employees</b> to be empowered and to
            make decisions.
          </div>
          <div className="os-content-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/structure.png"}
              alt=""
              width="700px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OrgStructure;
