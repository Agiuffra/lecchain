import React, { Component } from "react";

import "./general.css";

class Lectin1 extends Component {
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
              <b>Explore</b>: How can we transport this antigen with out cold
              chains?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                After choosing the antigen of the SARS-COV-2 virus, the main
                problem of current subunitary vaccines remains to be the
                distribution to hard-to-reach regions of the country. In that
                sense, we start investigating ways to distribute vaccines
                without cold chains. We found thermotolerant proteins remain
                soluble despite receiving heat treatment. They do not denature
                or lose their biological activity. In one investigation, Kwon et
                al. [33] gave heat-treatment, from 20 °C to 85 °C and back to 20
                °C, to E. coli proteins and proposed a general classification of
                the obtained heat-stable proteins into three classes. The first
                class corresponds to proteins that remain in their native and
                soluble state upon heating. The second class of heat-stable
                proteins unfolds upon heating, but their unfolded form is
                soluble in water. The third class of heat-stable proteins is
                unfolded by heating but can be refolded to their native state
                when cooled down.
              </div>
              <div className="subpopup-content-text">
                We found proteins from Archaea can conserve their native folding
                at temperatures higher than 100°C and improve the
                thermostability of the passengers to which they are fused.
                Fusing a thermostable protein to a passenger can cause two
                scenarios. The passenger stabilizes the whole fusion or is
                denatured but is refolded once moved back to permissive
                temperature [34].
              </div>
              <div className="subpopup-content-text">
                We discovered that many proteins had demonstrated thermostable
                properties when fused with a passenger protein. In the following
                table, we summarized some of them.
              </div>
              <div className="subpopup-content-img">aquí va una tabla</div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Are thermotolerant proteins the option?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Thermotolerant proteins can help to protect the antigen from
                higher temperatures. However, careful selection of which of them
                can work as a carrier of the antigen is needed. As a first
                print, MBP has shown the most considerable evidence of
                protection and as a thermotolerant carrier when fused with
                another protein. Hence, we start by looking more in-depth at
                this protein.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectin1;
