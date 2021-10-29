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
                sense, we start investigating ways to{" "}
                <b>distribute vaccines without cold chains</b>. We found
                <b>
                  thermotolerant proteins remain soluble despite receiving heat
                  treatment
                </b>
                . They do not denature or lose their biological activity. In one
                investigation, Kwon et al. [33] gave heat-treatment, from 20 °C
                to 85 °C and back to 20 °C, to <b>E. coli proteins</b> and
                proposed a general classification of the obtained heat-stable
                proteins into three classes. The first class corresponds to
                <b>
                  proteins that remain in their native and soluble state upon
                  heating
                </b>
                . The second class of heat-stable proteins{" "}
                <b>unfolds upon heating</b>, but their{" "}
                <b>unfolded form is soluble in water</b>. The third class of
                heat-stable proteins is <b>unfolded by heating</b> but can be
                <b>refolded to their native state when cooled down</b>.
              </div>
              <div className="subpopup-content-text">
                We found proteins from Archaea can conserve their native folding
                <b>at temperatures higher than 100°C</b> and improve the
                <b>thermostability of the passengers</b> to which they are
                fused. Fusing a thermostable protein to a passenger can cause
                two scenarios. The passenger <b>stabilizes the whole fusion</b>{" "}
                or is{" "}
                <b>
                  denatured but is refolded once moved back to permissive
                  temperature
                </b>{" "}
                [34].
              </div>
              <div className="subpopup-content-text">
                We discovered that many proteins had demonstrated thermostable
                properties when fused with a passenger protein. In the following
                table, we summarized some of them.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table8.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Are thermotolerant proteins the option?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                <b>Thermotolerant proteins</b> can help to{" "}
                <b>protect the antigen from higher temperatures</b>. However,
                careful selection of which of them can work as a{" "}
                <b>carrier of the antigen</b> is needed. As a first print,{" "}
                <b>MBP</b>
                has shown the most considerable{" "}
                <b>
                  evidence of protection and as a thermotolerant carrier
                </b>{" "}
                when fused with another protein. Hence, we start by looking more
                in-depth at this protein.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectin1;
