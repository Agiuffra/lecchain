import React, { Component } from "react";
import Navbar from "./navbar";
import Team from "./team";
import Footer from "./footer";

class Teams extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Team />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Teams;
