import React, { Component } from "react";
import Navbar from "./general/navbar";
import Collaborations from "./collaborations/collaborations";
import Footer from "./general/footer";

class Collabs extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar idx="2" />
        <Collaborations />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Collabs;
