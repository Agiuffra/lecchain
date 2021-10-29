import React, { Component } from "react";

import "./general.css";

class Antigen3 extends Component {
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
              <b>Explore</b>: What can we do to solve this problem?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Adjuvants are{" "}
                <b>
                  substances designed to enhance the immune response of vaccines
                </b>
                . These <b>combined with a specific antigen</b> generate a more
                significant number of antibodies; in this way,{" "}
                <b>vaccines can be given in fewer doses or quantities</b> [21].
                Adjuvants are capable of boosting immune response by a
                combination of various mechanisms, including (1){" "}
                <b>sustained release of antigen</b> at the site of injection
                (depot effect), (2) <b>up-regulation of cytokines</b> and
                chemokines, (3) <b>cellular recruitment</b> at the site of
                injection, (4) <b>increase antigen uptake</b> and presentation
                to antigen-presenting cells (APC), (5){" "}
                <b>activation and maturation of APC</b> [increased major
                histocompatibility complex (MHC) class II and co-stimulatory
                molecules expression] and migration to the draining lymph nodes,
                and (6) <b>activation of inflammasomes</b>. It seems that
                adjuvants activate innate immune responses to create a local
                immuno-competent environment at the injection site. Depending on
                the type of innate responses activated, adjuvants can alter the
                quality and quantity of adaptive immune responses [22].
              </div>
              <div className="subpopup-content-img">
                {/* aquí va una imagen */}
              </div>
              <div className="subpopup-content-text">
                <b>Subunit vaccines</b> delivered via a <b>mucosal route</b> can
                initiate{" "}
                <b>infection by first interacting with a mucosal surface</b>. A
                reasonable strategy for vaccine delivery is to target mucosal
                tissues directly. Some mucosal adjuvants reported in the
                literature are listed below.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table6.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Are adjuvants the key?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                The development of new vaccines or the improvement of existing
                ones is intricately related to effective and safe adjuvants for
                enhancing immune responses.{" "}
                <b>
                  Mucosal adjuvants are attractive antigens for increasing
                  immunogenicity in SARS-CoV 2 vaccines
                </b>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Antigen3;
