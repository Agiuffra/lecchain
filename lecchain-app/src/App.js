import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Collaborations from './pages/collaborations';
import Project from './pages/project';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/project" component={Project} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
