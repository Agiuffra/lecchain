import React, { Component } from "react";

import "./community.css";

class Community extends Component {
  render() {
    return (
      <div className="humprac-comm">
        <div className="comm-title">Community</div>
        <div className="comm-text">
          COVID-19 has brought to light a lot of aspects around public health
          and vaccination. People more than never, are aware of their
          immunological system and in having a health lifestyle. Different
          opinions have been generated according to these topics and
          misinformation has spread with them. As a project that seeks to face
          cold chains, is very important to identify people’s opinion and
          knowledge around this problem. That is why we have develop a
          classification regarding Lecchain ‘s community, a group of people that
          represent the four main areas that involve our problem: users,
          biotechnology experts, health professionals and infrastructure
          professionals to interview and collect insights, experiences and ways
          of thinking.
        </div>
        <div className="comm-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/community.png"}
            alt=""
            width="700px"
          />
        </div>
        <div className="comm-text">
          In a way to have opinions from both users and experts from different
          regions of our country, we have made contact with people from the
          majority of places in Peru. Above all, those where vaccination was
          delayed.
        </div>
        <div className="comm-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/community.png"}
            alt=""
            width="700px"
          />
        </div>
        <div className="comm-text">
          The following presents Lecchain ‘s community. Thanks to them we
          developed a project with a social and human vision.
        </div>
        <div className="comm-sect">
          <div className="comm-sect-img">
            <img
              src={process.env.PUBLIC_URL + "/humanpract/community-colage.png"}
              alt=""
              width="700px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
