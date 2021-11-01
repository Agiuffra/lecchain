import React, { Component } from "react";

import "./business.css";

class Business extends Component {
  render() {
    return (
      <div className="entrep-business">
        <div className="business-title">Business Model</div>
        <div className="business-intro">
          During the project development, a business model has been made in
          order to define all the aspects required in our project. Thus,
          different tools were applied in order to analyze regulation,
          scalability and the target audience.
        </div>
        <div className="business-sect">
          <div className="sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/canvas.jpg"}
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="business-sect">
          <div className="sect-txt">
            <div className="sect-txt-title">SWOT</div>
            <div className="sect-txt-text">
              The study of the SWOT matrix was carried out to visualize the
              weaknesses and threats as they can cause problems for the
              fulfillment of the objectives. Thus, this study also seeks to find
              the counterpart: strengths and opportunities.
            </div>
          </div>
          <div className="sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/swot.jpg"}
              alt=""
              width="700px"
            />
          </div>
        </div>
        <div className="business-sect">
          <div className="sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/canvas.jpg"}
              alt=""
              width="700px"
            />
          </div>
          <div className="sect-txt">
            <div className="sect-txt-title">Target Audience</div>
            <div className="sect-txt-text">
              In order to make the customer segmentation, we classify our
              audience in three main aspects: demographic, location and
              psychographic.
            </div>
          </div>
        </div>
        <div className="business-sect">
          <div className="sect-txt">
            <div className="sect-txt-title">Stakeholders</div>
            <div className="sect-txt-text">
              Since we already defined our target audience, now we did a
              stakeholder analysis and for that we classified them into three
              types: internal, external and public stakeholders.
            </div>
          </div>
          <div className="sect-img">
            <img
              src={
                process.env.PUBLIC_URL + "/entrepreneurship/stakeholders.jpg"
              }
              alt=""
              width="700px"
            />
          </div>
        </div>
        <div className="business-sect">
          <div className="sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/competitors.jpg"}
              alt=""
              width="700px"
            />
          </div>
          <div className="sect-txt">
            <div className="sect-txt-title">Competitors Analysis</div>
            <div className="sect-txt-text"></div>
          </div>
        </div>
        <div className="business-sect">
          <div className="sect-txt">
            <div className="sect-txt-title">Incubation Process</div>
            <div className="sect-txt-text">
              During these months, we participated in some pre-incubation
              activities offered by the Peruvian Ministry of Health in order to
              evaluate potential solutions around cold chains. Our long-term
              goal is to get funding by Concytec and make Lecchain come true.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
