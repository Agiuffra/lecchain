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
        <TextImage first='image' title='Problema'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas efficitur tincidunt interdum. Aliquam erat volutpat. 
          Sed ac nunc congue, placerat nisl non, malesuada turpis. 
          Praesent convallis mi ipsum, ultrices dignissim enim molestie vel. 
          Phasellus tincidunt sed odio vitae egestas. Fusce eros turpis, 
          malesuada vitae arcu vel, consectetur ornare dolor. Nam tempus 
          elementum magna ut cursus.'
          img='https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'
        />
        <TextImage first='text' title='Solución'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas efficitur tincidunt interdum. Aliquam erat volutpat. 
          Sed ac nunc congue, placerat nisl non, malesuada turpis. 
          Praesent convallis mi ipsum, ultrices dignissim enim molestie vel. 
          Phasellus tincidunt sed odio vitae egestas. Fusce eros turpis, 
          malesuada vitae arcu vel, consectetur ornare dolor. Nam tempus 
          elementum magna ut cursus.'
          img='https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'
        />
        <TeamBanner />
        <Sponsors />
        <Footer />
      </main>
    );
  }
}

export default Home;
