import React from 'react';
import { Link } from 'react-router';

export const NavigationCanvas = () => (
  <nav>
    <div className="player-profile">
      <img src="" alt="Player Avatar" />
    </div>

    <ul>
      <li><Link to="/player">Player</Link></li>
      <li><Link to="/compare">Compare</Link></li>
      <li><Link to="/schedule">Game Schedule</Link></li>
      <li><Link to="/YahooProfile">My Fantasy Teams</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);