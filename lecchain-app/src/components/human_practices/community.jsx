import React, { Component } from "react";
import User from "./popups/user";
import Health from "./popups/health";
import Bio from "./popups/bio";
import Infra from "./popups/infra";

import "./community.css";

class Community extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: false,
    health: false,
    bio: false,
    infra: false,
  };
  toggleUser = () => {
    this.setState({
      user: !this.state.user,
    });
  };
  toggleHealth = () => {
    this.setState({
      health: !this.state.health,
    });
  };
  toggleBio = () => {
    this.setState({
      bio: !this.state.bio,
    });
  };
  toggleInfra = () => {
    this.setState({
      infra: !this.state.infra,
    });
  };
  render() {
    return (
      <div className="humprac-comm">
        <div className="comm-title">Community</div>
        <div className="comm-text">
          COVID-19 has brought to light a lot of aspects around public health
          and vaccination. People more than never, are <b> aware of their
          immunological system and in having a health lifestyle </b>. Different
          opinions have been generated according to these topics and
          misinformation has spread with them. As a project that <b> seeks to face
          cold chains </b>, is very important to <b> identify people’s opinion and
          knowledge around this problem </b>. That is why we have develop a
          classification regarding Lecchain ‘s community, a group of people that
          represent the four main areas that involve our problem: <b> users,
          biotechnology experts, health professionals and infrastructure
          professionals </b> to interview and collect insights, experiences and ways
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
          majority of places in Peru to gather different points of view.
        </div>
        <div className="comm-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/mapa_community.png"}
            alt=""
            width="700px"
          />
          <div className="img-user-btn" onClick={this.toggleUser}></div>
          <div className="img-health-btn" onClick={this.toggleHealth}></div>
          <div className="img-bio-btn" onClick={this.toggleBio}></div>
          <div className="img-infra-btn" onClick={this.toggleInfra}></div>
        </div>
        <div className="comm-text">
          The following presents <b> Lecchain </b>‘s community. Thanks to them we
          developed a project with a social and human vision.
        </div>

        {this.state.user ? <User toggle={this.toggleUser} /> : null}
        {this.state.health ? <Health toggle={this.toggleHealth} /> : null}
        {this.state.bio ? <Bio toggle={this.toggleBio} /> : null}
        {this.state.infra ? <Infra toggle={this.toggleInfra} /> : null}

      </div>
    );
  }
}

export default Community;
