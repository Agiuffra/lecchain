import React, { Component } from "react";
import Navbar from "../components/general/navbar";
import Laboratorypage from "../components/laboratory/laboratory";
import Footer from "../components/general/footer";

class Laboratory extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar idx="4" />
        <Laboratorypage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Laboratory;
