import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/HeaderComponent/NavBar';
import CreatePlaylist from './components/CreatePlaylist';
import Registration from './components/Registration';
import AvailableTracks from './components/AvailableTracks';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route name="tracks" exact path="/tracks" component={AvailableTracks} />
          <Route name="home" exact path="/" component={Home} />
          <Route name="createplaylist" exact path="/createplaylist" component={CreatePlaylist} />
          <Route name="register" exact path="/register" component={Registration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
