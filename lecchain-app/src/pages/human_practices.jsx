import React, { Component } from "react";
import HumPracBanner from "../components/human_practices/banner";
import HumPracInit from "../components/human_practices/init";
import Overview from "../components/human_practices/overview";
import Community from "../components/human_practices/community";
import IHPractices from "../components/human_practices/ihpractices";
import Public from "../components/human_practices/public";
import Collaborations from "../components/human_practices/collaborations";
import SDG from "../components/human_practices/sdg";
import DivNInc from "../components/human_practices/divninc";
import Footer from "../components/general/footer";

class HumanPractices extends Component {
  render() {
    return (
      <main>
        <HumPracBanner />
        <HumPracInit />
        <Overview />
        <Community />
        <IHPractices />
        <Public />
        <Collaborations />
        <DivNInc />
        <Footer />
      </main>
    );
  }
}

export default HumanPractices;
