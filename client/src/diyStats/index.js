import React, { Component } from 'react';
import teams from '../helpers/teamNames';

class DIYStatsView extends Component {
  onCheck(event) {
    // console.log('checked!', event.target.name, event.target.checked);
  }
  onSubmit(event) {
    event.preventDefault();
  }
  render() {
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
        <input type="checkbox" name="0" /> Against a Team
        <input type="checkbox" name="1" /> On a Day of the Week
        <input type="checkbox" name="2" /> At a Specific Stadium
        <input type="checkbox" name="3" /> At Home/Away
        <input type="checkbox" name="4" /> Under Specific Weather Conditions
        <input type="checkbox" name="5" /> Started/Benched
        <form onChange={this.onCheck}>
          <div className="filter-form-select">
            <label htmlFor="teamSelect"> AGAINST A TEAM </label>
            <select data="teamVal" id="teamSelect">
              <option value="">All</option>
              {teamOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
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
