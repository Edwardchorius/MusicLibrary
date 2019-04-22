import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/HeaderComponent/NavBar';
import CreatePlaylist from './components/CreatePlaylist';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Home} />
          <Route name="createplaylist" exact path="/createplaylist" component={CreatePlaylist} />
        </div>
      </Router>
    );
  }
}

export default App;
