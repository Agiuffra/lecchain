import React, { Component } from "react";
import EntrepBanner from "../components/entrepreneuship/banner";
import EntrepInit from "../components/entrepreneuship/init";
import Footer from "../components/general/footer";

import "./entrepreneurship.css";

class Entrepreneurship extends Component {
  render() {
    return (
      <main>
        <EntrepBanner />
        <EntrepInit />
        <Footer />
      </main>
    );
  }
}

export default Entrepreneurship;
