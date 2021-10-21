import React, { Component } from "react";
import EngineeringBanner from "../components/engineering/banner";
import EngineeringInit from "../components/engineering/init";
import Circuit from "../components/engineering/circuit";
import Molecular from "../components/engineering/molecular";
import Computational from "../components/engineering/computational";
import BioParts from "../components/engineering/parts";
import Footer from "../components/general/footer";

class Engineering extends Component {
  render() {
    return (
      <main className="engineering-lecchain">
        <EngineeringBanner />
        <EngineeringInit />
        <Circuit />
        <Molecular />
        <Computational />
        <BioParts />
        <Footer />
      </main>
    );
  }
}

export default Engineering;
