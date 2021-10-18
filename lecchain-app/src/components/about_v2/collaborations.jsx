import React, { Component } from "react";
import collaborators from "./../../data/collaborators.js";

import "./collaborations.css";

class Collaborators extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="collaborator" key={this.props.id}>
        <img
          src={process.env.PUBLIC_URL + this.props.image}
          alt={this.props.name}
          className="collaborator-img"
        ></img>
        <div className="collaborator-name">{this.props.name}</div>
        <div className="collaborator-rol">{this.props.rol}</div>
      </div>
    );
  }
}

class CollaborationsCard extends Component {
  render() {
    const collaborations = collaborators.map((data) => {
      return (
        <Collaborators
          id={data.id}
          image={data.image}
          name={data.name}
          rol={data.rol}
        />
      );
    });
    return (
      <div className="collaboration-card">
        <h2 className="collaboration-title">Collaborators</h2>
        <div className="collaborators">{collaborations}</div>
      </div>
    );
  }
}

export default CollaborationsCard;
