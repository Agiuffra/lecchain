import React, { Component } from 'react'
import Collabs from './components/page_collaborations';
import Home from './components/page_home';
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
