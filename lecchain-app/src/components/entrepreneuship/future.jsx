import React, { Component } from "react";

import "./future.css";

class Future extends Component {
  render() {
    return (
      <div className="entrep-future">
        <div className="future-title">Future Perspective</div>
        <div className="future-desc">
          Thanks to our effort, we have been financed by two companies and a
          center of investigation. This had helped us to participate in the iGEM
          Design League competition and get our first resources for the
          experimental part. Our short-term goal is to start the experimental
          part of Lecchain and participate in the next iGEM Global competition.
          As part of our long-term goal is to validate Lecchain as a functional
          vaccine that can withstand high temperatures.
        </div>
        <div className="future-img">
          <img
            src={process.env.PUBLIC_URL + "/sponsors/BIO-logo.png"}
            alt=""
            width="200px"
          />
          <img
            src={process.env.PUBLIC_URL + "/sponsors/mased-logo.png"}
            alt=""
            width="200px"
          />
          <img
            src={process.env.PUBLIC_URL + "/sponsors/ROCHE-logo.png"}
            alt=""
            width="200px"
          />
        </div>
        <div className="future-desc-content">
          <div className="desc-content-cntnt">
            <div className="desc-content-title">Letter of intent by ROCHE</div>
            <div className="desc-content-text">
              As a formalization of the ROCHE agreement, we receive a letter in
              which is recognize the funding by ROCHE to kick-off the project.
            </div>
          </div>
          <div className="desc-content-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/carta.jpeg"}
              alt=""
              width="400px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Future;
