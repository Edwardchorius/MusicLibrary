import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
        <li className="navButton"><Link to="/tracks">Tracks</Link></li>
        <li className="navButton"><Link to="/createmusiclist">CreateMusicList</Link></li>
          <li className="navButton"><Link to="/">Shiplist</Link></li>
          <li className="navButton"><Link to="/createplaylist">CreateShipList</Link></li>
          <li className="navButton"><Link to="/register">Registration</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;