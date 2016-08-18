import React, { Component } from 'react';
import { connect } from 'react-redux';
import teams from '../helpers/teamNames';
import { fetchSpecificPlayers } from '../compare/actions';

class DIYStatsView extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onCheck(event) {
    // console.log('checked!', event.target.name, event.target.checked);
  }
  onFieldSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
  }
  onSearch(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    this.props.fetchSpecificPlayers({ playerNames: [event.target[0].value] });
  }
  render() {
    const teamOptions = [];
    let playerImage;
    for (let k in teams) {
      teamOptions.push(<option value={k}>{teams[k]}</option>);
    }
    if (this.props.players[0].player) {
      playerImage = <img
        className="player2-image"
        src={this.props.players[0].player.image_url.substring(155)}
      />;
    }
    return (
      <div className="center-content">
        <h1>DIY Stats View</h1>
        <h3>Choose a player:</h3>
        <div className="search-container">
          <form onSubmit={this.onSearch}>
            <input type="text" name="name" placeholder="SEARCH" />
            <button type="Submit" >Submit</button>
          </form>
        </div>
        <h3>Current Player:</h3>
        {playerImage}
        <h3>Performance</h3>
        <input type="checkbox" name="0" /> Against a Team
        <input type="checkbox" name="1" /> On a Day of the Week
        <input type="checkbox" name="2" /> At a Specific Stadium
        <input type="checkbox" name="3" /> At Home/Away
        <input type="checkbox" name="4" /> Under Specific Weather Conditions
        <input type="checkbox" name="5" /> Started/Benched
        <form onSubmit={this.onFieldSubmit}>
          <div className="filter-form-select">
            <label htmlFor="teamSelect"> AGAINST A TEAM </label>
            <select data="teamVal" id="teamSelect">
              {teamOptions}
            </select>
          </div>
          <button type="Submit" >Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps, { fetchSpecificPlayers })(DIYStatsView);

// Player
  // Against Team
  // Against Other Player (?)
  // Against Day of Week
  // Against Stadium
  // Against Weather
  // Against Playing Surface
  // At Home/Away
  // Started/Benched
