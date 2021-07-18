import React, { Component } from 'react';
import Home from './pages/home';
import Project from './pages/project';
import Collabs from './components/page_collaborations';
import Teams from './components/page_team';
import NotFoundPage from './components/page_notfound';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/team" component={Teams} />
          <Route exact path="/collaborations" component={Collabs} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
