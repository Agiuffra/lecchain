import React, { Component } from "react";
import Navbar from "./../components/general/navbar";
import Team from "./../components/team/team";
import Footer from "./../components/general/footer";

class Teams extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar idx="1" />
        <Team />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Teams;
