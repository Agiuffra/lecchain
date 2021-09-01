import React, { Component } from 'react'
import Footer from '../components/general/footer';
import HomeBanner from '../components/home/banner';
import TextImage from '../components/home/text_image';
import TeamBanner from '../components/home/team_banner';
import Sponsors from '../components/home/sponsors';

import './home.css';

class Home extends Component {
  render() {
    return (
      <main className="home-lecchain">

        <HomeBanner />
        <TextImage first='image' title='Problem'
          text='Many vaccines are thermally labile because of the stability of the 
          components on which they are based (e.g. mRNA, inactivated virus) and can 
          challenge the distribution and storage of vaccines in countries where 
          cold-chain management is difficult and expensive. In fact, the gold standard 
          for ultracold chain storage costs from $10,000 to $20,000 a piece (Baskar, 
          2021), which is a problem for regions with access difficulties.'
          img='https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'
        />
        <div className="spacer"></div>
        <TextImage first='text' title='Solution'
          text='We propose Lecchain, a thermal tolerance vaccine candidate using plant 
          lectin adjuvant. Lecchain will represent an innovative vaccine candidate which 
          supports room temperature and can be transported without a cold chain, produced 
          using a cheap bioreactor system, and does not generate waste.'
          img='https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'
        />
        <div className="spacer"></div>
        <TeamBanner />
        <Sponsors />
        <Footer />
      </main>
    );
  }
}

export default Home;
