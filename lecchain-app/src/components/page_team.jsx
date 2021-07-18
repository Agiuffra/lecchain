import React, { Component } from "react";
import Navbar from "./general/navbar";
import Team from "./team/team";
import Footer from "./general/footer";

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
