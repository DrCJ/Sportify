import React from 'react';
import teams from '../helpers/teamNames';

const DIYStatsView = () => {
  const teamOptions = [];
  for (let k in teams) {
    teamOptions.push(<option value={k}>{teams[k]}</option>);
  }
  return (
    <div className="center-content">
      <h1>DIY Stats View</h1>
      <h3>Choose a player:</h3>
      <div className="search-container">
        <form>
          <input type="text" name="name" placeholder="SEARCH" />
        </form>
      </div>
      <h3>Current Player:</h3>
      <h3>Performance</h3>
      <div className="filter-form-select">
        <label htmlFor="teamSelect"> AGAINST A TEAM </label>
        <select data="teamVal" id="teamSelect">
          <option value="">All</option>
          {teamOptions}
        </select>
      </div>
    </div>
  );
}

export default DIYStatsView;

// Player
  // Against Team
  // Against Other Player (?)
  // Against Day of Week
  // Against Stadium
  // Against Weather
  // Against Playing Surface
  // At Home/Away
  // Started/Benched
