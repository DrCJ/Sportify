import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../compare/actions';
import { filterPlayers } from '../player/actions';
import StatHeadings from '../player/StatHeadings.jsx';
import teams from '../helpers/teamNames';
import stadiums from '../helpers/stadiumNames';

class DIYStatsView extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onFieldSubmit = this.onFieldSubmit.bind(this);
  }

  onCheck(event) {
    // console.log('checked!', event.target.name, event.target.checked);
  }

  onFieldSubmit(event) {
    event.preventDefault();
    console.log(event.target[1].value);
    const reqObj = {};
    reqObj.filters = {};
    reqObj.filters.playerId = this.props.search[0].playerId;
    reqObj.filters.Opponent = event.target[0].value;
    reqObj.filters.HomeOrAway = event.target[1].value;
    reqObj.filters.Started = event.target[2].value;
    reqObj.tableName = 'playerProjectedGames';
    reqObj.season = 2015;
    console.log(reqObj);
    this.props.filterPlayers(reqObj)
    .then((response) => {
      console.log(response.payload.data[0]);
    });
  }

  onSearch(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    this.props.fetchSpecificPlayers({ playerNames: [event.target[0].value] })
    .then((response) => { console.log(response.payload.data[0]); });
  }

  renderStats() {
    return this.props.players.map((player, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td> <a> {player.Name || player.full }</a></td>
            <td> {player.Position || 'NA'} </td>
            <td> {player.Played || 0}</td>
            <td> {player.Opponent || 'BYE'} </td>
            <td> {player.FantasyPoints || 0}</td>
            <td> Actual </td>
            <td> {parseInt(player.PassingYards) || 0}</td>
            <td> {player.PassingTouchdowns || 0}</td>
            <td> {player.PassingInterceptions || 0}</td>
            <td> {player.PassingAttempts || player.RushingAttempts || 0 }</td>
            <td> {parseInt(player.RushingYards) || 0}</td>
            <td> {player.RushingTouchdowns || 0}</td>
            <td> {player.ReceivingTargets || 0}</td>
            <td> {player.Receptions || 0} </td>
            <td> {player.RushingTouchdowns || 0}</td>
            <td> {player.ReceivingTouchdowns || 0}</td>
            <td> {player.TwoPointConversionReturns || 0}</td>
            <td> {player.PassingTouchdowns > 30 ? 'Approve' : 'Disapprove'} </td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    const teamOptions = [];
    const stadiumOptions = [];
    let playerImage, playerStats;
    for (let k in teams) {
      teamOptions.push(<option key={k} value={k}>{teams[k]}</option>);
    }
    for (let j in stadiums) {
      stadiumOptions.push(<option key={j} value={j}>{j}</option>);
    }
    if (this.props.search[0]) {
      playerImage = <img src={this.props.search[0].player.image_url} role="presentation"/>;
    }
    console.log(this.props.players);
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
        <input type="checkbox" name="5" /> Playing Surface
        <form onSubmit={this.onFieldSubmit}>
          <div className="filter-form-select">
            <label htmlFor="teamSelect"> AGAINST A TEAM </label>
            <select data="teamVal" id="teamSelect">
              {teamOptions}
            </select>
          </div>
          <div className="filter-form-select">
            <label htmlFor="teamSelect"> At Home/Away </label>
            <select data="teamVal" id="teamSelect">
              <option value={'HOME'}>Home</option>
              <option value={'AWAY'}>Away</option>
            </select>
          </div>
          <div className="filter-form-select">
            <label htmlFor="teamSelect"> When Started/Benched </label>
            <select data="teamVal" id="teamSelect">
              <option value={1}>Started</option>
              <option value={0}>Benched</option>
            </select>
          </div>
          <div className="filter-form-select">
            <label htmlFor="teamSelect"> When Started/Benched </label>
            <select data="teamVal" id="teamSelect">
              {stadiumOptions}
            </select>
          </div>
          <button type="Submit" >Submit</button>
        </form>
        <h3>Past Statistics</h3>
        <table>
          <StatHeadings />
          {this.renderStats()}
        </table>
        <h3>Conclusions</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players, search: state.query };
}

DIYStatsView.propTypes = {
  players: React.PropTypes.array.isRequired,
  search: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchSpecificPlayers, filterPlayers })(DIYStatsView);
