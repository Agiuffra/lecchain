import React, { Component } from "react";
import members from "./../../data/members.js";

import "./team.css";

class Members extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="team-student" key={this.props.id}>
        <img
          src={process.env.PUBLIC_URL + this.props.image}
          alt={this.props.name}
          className="team-student-img"
        ></img>
      </div>
    );
  }
}

class TeamCard extends Component {
  render() {
    const students = members.map((data) => {
      return <Members id={data.id} image={data.image} name={data.name} />;
    });
    return (
      <div className="team-card">
        <h2 className="team-title">TEAM</h2>
        <div className="team-teacher">
          <img
            src={process.env.PUBLIC_URL + "/team/Donayre.jpg"}
            className="team-student-img"
          ></img>
        </div>
        <div className="team-students">{students}</div>
      </div>
    );
  }
}

export default TeamCard;
