import React, { Component } from "react";
import Popup from "./popup.jsx";
import members from "./../../data/members.js";

import "./team.css";

class Members extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    seenPopup: false,
  };
  togglePopup = () => {
    this.setState({
      seenPopup: !this.state.seenPopup,
    });
  };
  render() {
    return (
      <div className="team-student" key={this.props.id}>
        <img
          src={process.env.PUBLIC_URL + this.props.image}
          alt={this.props.name}
          className="student-img"
          onClick={this.togglePopup}
        ></img>
        <div className="student-name">{this.props.name}</div>
        <div className="student-career">{this.props.career}</div>
        <div className="student-email">
          <a href="mailto:{this.props.email}">{this.props.email}</a>
        </div>
        {this.state.seenPopup ? (
          <Popup
            toggle={this.togglePopup}
            id={this.props.id}
            name={this.props.name}
            email={this.props.email}
            career={this.props.career}
            work={this.props.work}
            interests={this.props.interests}
            description={this.props.description}
            image={this.props.image}
          />
        ) : null}
      </div>
    );
  }
}

class TeamCard extends Component {
  render() {
    const students = members.map((data) => {
      return (
        <Members
          id={data.id}
          name={data.name}
          email={data.email}
          career={data.career}
          work={data.work}
          interests={data.interests}
          description={data.description}
          image={data.image}
        />
      );
    });
    return (
      <div className="team-card">
        <h2 className="team-title" ref={this.scrollDiv}>
          LECCHAIN crew
        </h2>
        <div className="team-students">{students}</div>
      </div>
    );
  }
}

export default TeamCard;
