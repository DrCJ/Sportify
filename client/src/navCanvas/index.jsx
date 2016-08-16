import React from 'react';
import { Link } from 'react-router';

const NavigationCanvas = () => (
  <nav className="nav-canvas" >
    <div className="player-profile" />
    <ul>
      <li className="nav-link"><Link to="/player">Player</Link></li>
      <li className="nav-link"><Link to="/compare">Compare</Link></li>
      <li className="nav-link"><Link to="/schedule">Game Schedule</Link></li>
      <li className="nav-link"><Link to="/LeagueOverview">My Fantasy Teams</Link></li>
      <li className="nav-link"><Link to="/Statistics">Statistics</Link></li>
      <li className="nav-link"><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default NavigationCanvas;
