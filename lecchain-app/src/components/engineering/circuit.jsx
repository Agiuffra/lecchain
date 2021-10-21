import React, { Component } from "react";

import "./circuit.css";

class Circuit extends Component {
  render() {
    return (
      <div className="eng-circuit">
        <div className="circuit-title">Circuit Design</div>
        <div className="circuit-txt">
          Lecchain was born with the aim of being the first step towards the
          production of more accessible vaccines, which allow reaching the most
          remote places not only of the country, but of all those where
          maintaining cold chains is difficult and expensive.
        </div>
        <div className="circuit-txt">
          Lecchain is a subunit, oral and thermostable vaccine candidate for
          COVID-19 based on the RBD Spike protein joined to the adjuvant Ricin
          Toxin B (RTB), which serves as an antigen delivered to the mucosal
          immune system. This fusion will, ideally, improve thermal stability of
          the antigen and will allow its proper lyophilization because of the
          lectin’s properties.
        </div>
        <div className="circuit-txt">
          Unlike current commercial vaccines, Lecchain will represent an
          innovative vaccine candidate which supports room temperature and could
          be transported without a cold chain, produced using a cheap bioreactor
          system, and without generating waste.
        </div>
        <div className="circuit-ref">
          <div className="ref-title">References</div>
          <div className="ref-ref">
            [1] Autor, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
      </div>
    );
  }
}

export default Circuit;
