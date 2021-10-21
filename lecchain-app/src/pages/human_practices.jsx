import React, { Component } from "react";
import HumPracBanner from "../components/human_practices/banner";
import HumPracInit from "../components/human_practices/init";
import Overview from "../components/human_practices/overview";
import Public from "../components/human_practices/public";
import Footer from "../components/general/footer";

class HumanPractices extends Component {
  render() {
    return (
      <main>
        <HumPracBanner />
        <HumPracInit />
        <Overview />
        <Public />
        <Footer />
      </main>
    );
  }
}

export default HumanPractices;
