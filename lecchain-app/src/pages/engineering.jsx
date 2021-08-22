import React, { Component } from "react";
import Navbar from "../components/general/navbar";
import Engineeringpage from "../components/engineering/engineering";
import Footer from "../components/general/footer";

class Engineering extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar idx="5" />
        <Engineeringpage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Engineering;
