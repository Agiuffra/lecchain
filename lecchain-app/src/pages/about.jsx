import React, { Component } from "react";
import AboutBanner from "../components/about_v2/banner";
import Initial from "../components/about_v2/init";
import TeamCard from "../components/about_v2/team";
import Instructors from "../components/about_v2/instructors";
import Footer from "../components/general/footer";
import CollaborationsCard from "../components/about_v2/collaborations";
import SponsorsCard from "../components/about_v2/sponsors";

import "./about.css";

class About extends Component {
  render() {
    return (
      <main className="about-lecchain">
        <AboutBanner />
        <Initial />
        <TeamCard />
        <Instructors />
        <CollaborationsCard />
        <SponsorsCard />
        <Footer />
      </main>
    );
  }
}

export default About;
