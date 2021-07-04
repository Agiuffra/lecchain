import React, { Component } from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Collaborations from './components/collaborations';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Collaborations />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
