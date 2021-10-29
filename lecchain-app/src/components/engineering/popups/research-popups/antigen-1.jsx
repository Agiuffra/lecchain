import React, { Component } from "react";

import "./general.css";

class Antigen1 extends Component {
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
              <b>Explore</b>: What do we know about vaccines?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                After stating the problem of cold chains and realizing the need
                for more accessible vaccines, a deep investigation into current
                vaccines and the ones under development was made to know their
                composition and interact with the human body.
              </div>
              <div className="subpopup-content-text">
                There are several types of vaccines:{" "}
                <b>
                  inactivated vaccines, live-attenuated vaccines, nucleic acid
                  vaccines, subunit, recombinant, polysaccharide, conjugate
                  vaccines, toxoid vaccines, and viral vector vaccines
                </b>
                , and others. The following table summarizes the advantages and
                disadvantages of some of them.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table1.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="subpopup-content-text">
                Unlike inactivated or live-attenuated viruses and some viral
                vector vaccines,{" "}
                <b>
                  subunit vaccines are protein-based and contain specific viral
                  antigenic fragments
                </b>
                . Subunitary vaccines{" "}
                <b>do not include any component of infectious viruses</b>.
                Therefore, they eliminate the concerns of incomplete
                inactivation, virulence recovery, or pre-existing immunity [6],
                [7].
              </div>
              <div className="subpopup-content-text">
                UCurrent vaccines for COVID-19 are from several types. Each of
                them had reported a good percentage of efficiency and its
                composition made them to have different characteristics as
                storage temperature.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table2.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="subpopup-content-text">
                Despite many vaccines being stored in regular fridge
                temperature, it equally requires cold chains in order to be
                distributed to the regions.
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Which vaccine?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Vaccines based on adenoviruses or mRNA need a complex
                production. Also, they need ultra-low temperatures or low
                temperatures to maintain their efficacy (cold chains). Subunit
                vaccines are an option in which recombinant technologies can be
                used.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Antigen1;
