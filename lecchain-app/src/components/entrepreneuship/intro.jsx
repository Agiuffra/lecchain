import React, { Component } from "react";

import "./intro.css";

class EntrIntro extends Component {
  render() {
    return (
      <div className="entrep-intro">
        COVID-19 pandemic has brought to light many aspects of public health
        systems that require logistic implementations to ensure an efficient
        vaccine delivery. In fact, in a country like Peru where many communities
        are in hard-to-reach regions, cold chains are an everyday challenge for
        vaccines. That is the reason we propose Lecchain, a thermostable
        COVID-19 vaccine candidate capable of being transported and distributed
        without passing through the complex logistics of cold chains.
      </div>
    );
  }
}

export default EntrIntro;
