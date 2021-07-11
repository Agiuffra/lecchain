import React, { Component } from "react";
import Navbar from "./navbar";
import Collaborations from "./collaborations";
import Footer from "./footer";

class Collabs extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Collaborations />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Collabs;
