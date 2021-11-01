import React, { Component } from "react";

import "./extra.css";

class Extra extends Component {
  render() {
    return (
      <div className="entrep-extra">
        <div className="extra-sect">
          <div className="ext-sect-txt">
            <div className="ext-sect-text">
              Datatón was the name that the Peruvian Ministry of Health gives to
              the competition whose goal was to propose an innovative solution
              to prevent the third wave of COVID19 in Peru. Representative
              members participated in this event with the project called
              “Mathematical model which determines the vulnerability of the
              regions to face logistical processes of cold chains”. Thanks to
              this, we were ranked as the 10th best project out of 200 different
              ones.
            </div>
          </div>
          <div className="ext-sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/dataton.jpeg"}
              alt=""
              width="500px"
            />
          </div>
          <br />
          <div className="ext-sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/dataton_b.png"}
              alt=""
              width="700px"
            />
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/dataton_c.png"}
              alt=""
              width="800px"
            />
          </div>
        </div>
        <div className="extra-sect">
          <div className="ext-sect-txt">
            <div className="ext-sect-text">
              CONCYTEC is the acronym of “Consejo Nacional de Ciencia,
              Tecnología e Innovación Tecnología'' which its main goal is to
              regulate, direct, guide, promote, coordinate, supervise and
              evaluate the actions of the Peruvian State in the field of
              Science, Technology and technological Innovation. Every year they
              open different calls to participate in a scientific research
              project in order to support them financially. For this reason, we
              are working hard to prepare Lecchain to participate in the next
              call.
            </div>
          </div>
          <div className="ext-sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/concytec.png"}
              alt=""
              width="700px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Extra;
