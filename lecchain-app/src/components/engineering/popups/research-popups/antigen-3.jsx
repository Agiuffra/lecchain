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
                Adjuvants are substances designed to enhance the immune response
                of vaccines. These combined with a specific antigen generate a
                more significant number of antibodies; in this way, vaccines can
                be given in fewer doses or quantities [21]. Adjuvants are
                capable of boosting immune response by a combination of various
                mechanisms, including (1) sustained release of antigen at the
                site of injection (depot effect), (2) up-regulation of cytokines
                and chemokines, (3) cellular recruitment at the site of
                injection, (4) increase antigen uptake and presentation to
                antigen-presenting cells (APC), (5) activation and maturation of
                APC [increased major histocompatibility complex (MHC) class II
                and co-stimulatory molecules expression] and migration to the
                draining lymph nodes, and (6) activation of inflammasomes. It
                seems that adjuvants activate innate immune responses to create
                a local immuno-competent environment at the injection site.
                Depending on the type of innate responses activated, adjuvants
                can alter the quality and quantity of adaptive immune responses
                [22].
              </div>
              <div className="subpopup-content-img">aquí va una imagen</div>
              <div className="subpopup-content-text">
                Subunit vaccines delivered via a mucosal route can initiate
                infection by first interacting with a mucosal surface. A
                reasonable strategy for vaccine delivery is to target mucosal
                tissues directly. Some mucosal adjuvants reported in the
                literature are listed below.
              </div>
              <div className="subpopup-content-img">aquí va una tabla</div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Are adjuvants the key?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                The development of new vaccines or the improvement of existing
                ones is intricately related to effective and safe adjuvants for
                enhancing immune responses. Mucosal adjuvants are attractive
                antigens for increasing immunogenicity in SARS-CoV 2 vaccines.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Antigen3;
