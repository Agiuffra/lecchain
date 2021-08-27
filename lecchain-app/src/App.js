import React, { Component } from 'react';
import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
/* import Collabs from './pages/collaborations'; */
/* import Teams from './pages/team'; */
/* import Engineering from './pages/engineering'; */
/* import Laboratory from './pages/laboratory'; */
import NotFoundPage from './pages/page_notfound';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/team" component={Teams} />
          <Route exact path="/collaborations" component={Collabs} />
          <Route exact path="/engineering" component={Engineering} /> 
          <Route exact path="/laboratory" component={Laboratory} />*/}
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
