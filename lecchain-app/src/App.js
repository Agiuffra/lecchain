import React, { Component } from 'react';
import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
import Engineering from './pages/engineering';
import HumanPractices from './pages/human_practices';
import Entrepreneurship from './pages/entrepreneurship';
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
          <Route exact path="/engineering" component={Engineering} />
          <Route exact path="/human-practices" component={HumanPractices} />
          <Route exact path="/entrepreneurship" component={Entrepreneurship} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
