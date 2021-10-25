import React, { Component } from "react";

import "./general.css";

class Lectin3 extends Component {
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
              <b>Explore</b>: What is the evidence behind plant lectins?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                When looking for other thermotolerant proteins, we found plant
                lectins have demonstrated good thermotolerance properties.
              </div>
              <div className="subpopup-content-text">
                In one research Pusztai and Grant found heating of seeds at 70°C
                did not affect lectin activity. Also, higher temperatures were
                needed to inactivate the antinutritional effects [42] . Indeed,
                [43] it is reported that temperatures between 119°C and 136°C
                reduced lectin activity to a large extent. Moreover, for beans
                that were processed at 102°C, slight reversibility of lectins
                inactivation was observed after storage for seven weeks. Still,
                the content of lectins was reduced and the ones treated at
                temperatures of 136°C did not show any change in lectin content
                after storage. In addition, a report based on the study of
                Jatropha curcas’s lectin activity showed that inactivation by
                moist heat treatment at 100°C for 20, 40 and 60 min; and dry
                heat treatment at 130°C and 160°C for 20, 40 and 60 min did not
                decrease the activity of lectin in either the toxic or non-toxic
                varieties [44].
              </div>
              <div className="subpopup-content-text">
                Apart from these, plant lectins have also been characterized as
                potent natural adjuvants that the immunomodulatory agents, and
                can stimulate the innate and adaptive immune systems. Until
                2017, the following lectins had applications of immunomodulatory
                and in vivo experimental models of microbial infections.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table10.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Do adjuvants have all we need for our solution?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Apart from being demonstrated as promising adjuvants, plant
                lectins have documented thermotolerant properties well. From the
                list of adjuvants, we look for the ones that have demonstrated
                evidence joined with antigens.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectin3;
