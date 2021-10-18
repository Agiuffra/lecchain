import React, { Component } from 'react'
import Footer from '../components/general/footer';
import HomeBanner from '../components/home/banner';
import Initial from "../components/home/init";
import Problem from "../components/home/problem";
import Challenge from "../components/home/challenge";

import './home.css';

class Home extends Component {
  render() {
    return (
      <main className="home-lecchain">
        <HomeBanner />
        <Initial />
        <Problem />
        <Challenge />
        <Footer />
      </main>
    );
  }
}

export default Home;
