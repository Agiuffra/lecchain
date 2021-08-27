import React, { Component } from "react";
import sponsorData from "./../../data/sponsors";

import "./sponsors.css";

class Sponsor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sponsor" key={this.props.id}>
        <img
          src={process.env.PUBLIC_URL + this.props.image}
          alt={this.props.name}
          width="100px"
          className="sponsor-img"
        ></img>
        <p className="sponsor-txt">{this.props.text}</p>
      </div>
    );
  }
}

class SponsorsCard extends Component {
  render() {
    const sponsors = sponsorData.map((data) => {
      return (
        <Sponsor
          id={data.id}
          image={data.image}
          name={data.name}
          text={data.description}
        />
      );
    });
    return (
      <div className="sponsors-card">
        <h2 className="sponsors-title">SPONSORS</h2>
        <div className="sponsors-images">{sponsors}</div>
      </div>
    );
  }
}

export default SponsorsCard;
