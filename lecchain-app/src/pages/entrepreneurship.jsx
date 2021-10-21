import React, { Component } from "react";
import EntrepBanner from "../components/entrepreneuship/banner";
import EntrepInit from "../components/entrepreneuship/init";
import EntrIntro from "../components/entrepreneuship/intro";
import Lecchain from "../components/entrepreneuship/lecchain";
import OrgStructure from "../components/entrepreneuship/structure";
import Product from "../components/entrepreneuship/product";
import Business from "../components/entrepreneuship/business";
import Extra from "../components/entrepreneuship/extra";
import Complementary from "../components/entrepreneuship/complementary";
import Future from "../components/entrepreneuship/future";
import Footer from "../components/general/footer";

import "./entrepreneurship.css";

class Entrepreneurship extends Component {
  render() {
    return (
      <main>
        <EntrepBanner />
        <EntrepInit />
        <EntrIntro />
        <Lecchain />
        <OrgStructure />
        <Product />
        <Business />
        <Extra />
        <Complementary />
        <Future />
        <Footer />
      </main>
    );
  }
}

export default Entrepreneurship;
