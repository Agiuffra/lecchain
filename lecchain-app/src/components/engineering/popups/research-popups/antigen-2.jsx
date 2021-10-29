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
                Subunit vaccines are vaccines based on{" "}
                <b>synthetic peptides or recombinant proteins</b>. Unlike
                inactivated, live-attenuated viruses and some viral vectored
                vaccines, subunit vaccines{" "}
                <b>mainly contain specific viral antigenic fragments</b>.
              </div>
              <div className="subpopup-content-text">
                Subunit vaccines are generally safe without causing potential
                harmful immune responses, making them{" "}
                <b>promising vaccine candidates</b>. Moreover, they{" "}
                <b>
                  target specific protein domains, well-defined neutralizing
                  epitopes
                </b>
                with improved immunogenicity [6], which cannot cause disease
                state. Because of the <b>purified antigenic component</b>, they
                have fewer chances of side effects.
              </div>
              <div className="subpopup-content-text">
                <b>Subunit vaccines</b> are <b>safer for immunization</b> but
                may lack sufficient immunogenicity to provide complete immunity
                to the pathogen. Antigen{" "}
                <b>recombinant proteins fused with some adjuvant protein</b> are
                strategies for increasing immunogenicity [9], [10]. Some of the
                advantages and drawbacks of different types of subunit vaccines
                are listed below.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table3.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table4.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="subpopup-content-text">
                Currently, there are <b>seven COVID-19 subunit vaccines</b> in
                clinical trials, with 50 other candidates under preclinical
                development, making this the most common platform. Most of these
                vaccines{" "}
                <b>
                  contain full-length SARS-CoV-2 S protein or portions of it
                </b>{" "}
                to induce neutralizing antibodies, similarly to the majority of
                SARS and MERS vaccines, which had differing levels of efficacy.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table5.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Are subunit vaccines a good option?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Subunit vaccines have been used to <b>attack many diseases</b>{" "}
                and they are <b>not an unknown technology</b>. However, it needs
                the joint of an adjuvant in order to enhance its immunogenicity.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Antigen2;
