import React from 'react';
import { Link } from 'react-router';

export const NavigationCanvas = () => (
  <nav className="nav-canvas" >
    <div className="player-profile">
      <img src="" alt="Player Avatar" />
    </div>

    <ul>
      <li className="nav-link"><Link to="/player">Player</Link></li>
      <li className="nav-link"><Link to="/compare">Compare</Link></li>
      <li className="nav-link"><Link to="/schedule">Game Schedule</Link></li>
      <li className="nav-link"><Link to="/YahooProfile">My Fantasy Teams</Link></li>
      <li className="nav-link"><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);