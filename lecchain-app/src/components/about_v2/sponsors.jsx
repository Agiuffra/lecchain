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
          className="sponsor-img"
        />
      </div>
    );
  }
}

class SponsorsCard extends Component {
  render() {
    const sponsors = sponsorData.map((data) => {
      return <Sponsor id={data.id} image={data.image} name={data.name} />;
    });
    return (
      <div className="sponsors-card">
        <h2 className="sponsors-title">Our Sponsors</h2>
        <div className="sponsores">{sponsors}</div>
      </div>
    );
  }
}

export default SponsorsCard;
