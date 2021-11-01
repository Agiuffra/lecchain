import React, { Component } from "react";

import "./complementary.css";

class Complementary extends Component {
  render() {
    return (
      <div className="entrep-complementary">
        <div className="comp-title">Complementary Activities</div>
        <div className="comp-desc">
          As part of our journey to get funded, we have made several activities
          to engage and promote Lecchain (see Education and Public Engagement).
          Thanks to this, we have been invited to professionals summits and
          courseworks where we get feedback from experts in the scientific and
          entrepreneurship community.
        </div>
        <div className="comp-desc-sect">
          <div className="desc-sect-title">Cleveland Clinic Summit</div>
          <div className="desc-sect-text">
            This event takes place annually at the beginning of october and it
            brought together a large panel of experts from Cleveland Clinic who
            presented high-impact projects in the areas of Bioengineeringing
            around the fight against COVID-19. This year we were invited to
            participate and talk about our solution.
          </div>
          <div className="desc-sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/cleveland.png"}
              alt=""
              width="700px"
            />
          </div>
          <br />
          <div className="desc-sect-img">
            <img
              src={
                process.env.PUBLIC_URL + "/entrepreneurship/certificate_a.png"
              }
              alt=""
              width="700px"
            />
            <img
              src={
                process.env.PUBLIC_URL + "/entrepreneurship/certificate_b.png"
              }
              alt=""
              width="700px"
            />
          </div>
        </div>
        <div className="comp-desc-sect">
          <div className="desc-sect-title">Pre-incuva BootCamp #03</div>
          <div className="desc-sect-text">
            Event organized by UTEC Ventures, an incubation organization from
            UTEC which main goal is to help raise project to realize the
            business idea and the first steps for launching. We were selected to
            participate and thanks to that we were guided by experts in the
            entrepreneurship field in order to identify our differences, scope,
            understand the user and our target audience and state our
            challenges.
          </div>
          <div className="desc-sect-img">
            <img
              src={process.env.PUBLIC_URL + "/entrepreneurship/bootcamp.png"}
              alt=""
              width="700px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Complementary;
