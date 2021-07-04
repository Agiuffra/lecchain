import React, { Component } from 'react'
import Footer from './components/footer';
import HomeBanner from './components/banner';
import TextImage from './components/text_image';
import TeamBanner from './components/team_banner';
import Sponsors from './components/sponsors';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeBanner />
        <TextImage first='text' title='Problem'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas efficitur tincidunt interdum. Aliquam erat volutpat. 
          Sed ac nunc congue, placerat nisl non, malesuada turpis. 
          Praesent convallis mi ipsum, ultrices dignissim enim molestie vel. 
          Phasellus tincidunt sed odio vitae egestas. Fusce eros turpis, 
          malesuada vitae arcu vel, consectetur ornare dolor. Nam tempus 
          elementum magna ut cursus. Nam cursus vitae nisl eu sagittis. 
          Duis ipsum elit, feugiat at congue id, fringilla vitae leo. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
          posuere cubilia curae.'
        />
        <TextImage first='image' title='Solution'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas efficitur tincidunt interdum. Aliquam erat volutpat. 
          Sed ac nunc congue, placerat nisl non, malesuada turpis. 
          Praesent convallis mi ipsum, ultrices dignissim enim molestie vel. 
          Phasellus tincidunt sed odio vitae egestas. Fusce eros turpis, 
          malesuada vitae arcu vel, consectetur ornare dolor. Nam tempus 
          elementum magna ut cursus. Nam cursus vitae nisl eu sagittis. 
          Duis ipsum elit, feugiat at congue id, fringilla vitae leo. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
          posuere cubilia curae.'
        />
        <TeamBanner />
        <Sponsors />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
