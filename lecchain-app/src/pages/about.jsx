import React, { Component } from "react";
import AboutBanner from "../components/about/banner";
import Footer from "../components/general/footer";
import TeamCard from "../components/about/team";
import CollaborationsCard from "../components/about/collaborations";
import SponsorsCard from "../components/about/sponsors";

import "./about.css";

class About extends Component {
  render() {
    return (
      <main className="about-lecchain">
        <AboutBanner />
        <h1 className="about-title">ABOUT</h1>
        <TeamCard />
        <CollaborationsCard />
        <SponsorsCard />
        <Footer />
      </main>
    );
  }
}

export default About;
