import React, { Component } from "react";

import "./general.css";

class Antigen2 extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="subpopup-box">
        <div className="sub-box">
          <div className="close-icon" onClick={this.handleClick}>
            X
          </div>
          <div className="subpopup-content">
            <div className="subpopup-content-title">
              <b>Explore</b>: What are subunit vaccines? What is the evidence
              around them?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Subunit vaccines are vaccines based on synthetic peptides or
                recombinant proteins. Unlike inactivated, live-attenuated
                viruses and some viral vectored vaccines, subunit vaccines
                mainly contain specific viral antigenic fragments.
              </div>
              <div className="subpopup-content-text">
                Subunit vaccines are generally safe without causing potential
                harmful immune responses, making them promising vaccine
                candidates. Moreover, they target specific protein domains,
                well-defined neutralizing epitopes with improved immunogenicity
                [6], which cannot cause disease state. Because of the purified
                antigenic component, they have fewer chances of side effects.
              </div>
              <div className="subpopup-content-text">
                Subunit vaccines are safer for immunization but may lack
                sufficient immunogenicity to provide complete immunity to the
                pathogen. Antigen recombinant proteins fused with some adjuvant
                protein are strategies for increasing immunogenicity [9], [10].
                Some of the advantages and drawbacks of different types of
                subunit vaccines are listed below.
              </div>
              <div className="subpopup-content-img">aquí va una tabla</div>
              <div className="subpopup-content-img">aquí va una tabla</div>
              <div className="subpopup-content-text">
                Currently, there are seven COVID-19 subunit vaccines in clinical
                trials, with 50 other candidates under preclinical development,
                making this the most common platform. Most of these vaccines
                contain full-length SARS-CoV-2 S protein or portions of it to
                induce neutralizing antibodies, similarly to the majority of
                SARS and MERS vaccines, which had differing levels of efficacy.
              </div>
              <div className="subpopup-content-img">aquí va una tabla</div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Are subunit vaccines a good option?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Subunit vaccines have been used to attack many diseases and they
                are not an unknown technology. However, it needs the joint of an
                adjuvant in order to enhance its immunogenicity.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Antigen2;
