import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../compare/actions';
import { filterPlayers } from '../player/actions';
import { getOnePlayerModal } from '../player/actions';
import { filterByDay } from './actions';
import StatHeadings from '../player/StatHeadings.jsx';
import teams from '../helpers/teamNames';
import stadiums from '../helpers/stadiumNames';
import filters from '../helpers/filterCategories';

class DIYStatsView extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onFieldSubmit = this.onFieldSubmit.bind(this);
    this.onDayOfWeek = this.onDayOfWeek.bind(this);
  }

  onCheck(event) {
    // console.log('checked!', event.target.name, event.target.checked);
  }

  onFieldSubmit(event) {
    event.preventDefault();
    const reqObj = {};
    reqObj.filters = {};
    reqObj.filters.playerId = this.props.search[0].playerId;
    reqObj.filters.Opponent = event.target[0].value;
    reqObj.filters.HomeOrAway = event.target[1].value;
    reqObj.filters.Started = event.target[2].value;
    reqObj.filters.Stadium = event.target[3].value;
    reqObj.filters.PlayingSurface = event.target[4].value;
    reqObj.tableName = 'playerGames';
    reqObj.season = 2015;
    console.log(reqObj);
    this.props.filterPlayers(reqObj)
    .then((response) => {
      console.log(response.payload.data[0]);
    });
  }

  onDayOfWeek(event) {
    event.preventDefault();
    const playerIdArray = { playerId:[this.props.search[0].playerId] };
    const day = event.target[0].value;
    this.props.getOnePlayerModal(playerIdArray).then((data) => { this.props.filterByDay(data, day); });
  }

  onSearch(event) {
    event.preventDefault();
    this.props.fetchSpecificPlayers({ playerNames: [event.target[0].value] })
    .then(() => {
      const playerIdArray = { playerId:[this.props.search[0].playerId] };
      this.props.getOnePlayerModal(playerIdArray);
    });
  }

  renderStats() {
    return this.props.modal.map((player, index) => {
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

  renderOptions(object) {
    const output = [];
    for (var key in object) {
      output.push(<option key={key} value={key}>{object[key]}</option>);
    }
    return output;
  }

  renderFilters() {
    const teamOptions = [];
    const stadiumOptions = [];
    for (let k in teams) {
      teamOptions.push(<option key={k} value={k}>{teams[k]}</option>);
    }
    for (let j in stadiums) {
      stadiumOptions.push(<option key={j} value={j}>{j}</option>);
    }
    return filters.map((filter, index) => {
      for (var key in filter) {
        if (typeof filter[key] === 'object') {
          return (
            <div className="filter-form-select">
              <label> {key} </label>
              <select>
                {this.renderOptions(filter[key])}
              </select>
            </div>
          );
        } else if (filter[key] === '{teamOptions}') {
          return (
            <div className="filter-form-select">
              <label> {key} </label>
              <select>
                {teamOptions}
              </select>
            </div>
          );
        } else if (filter[key] === '{stadiumOptions}') {
          return (
            <div className="filter-form-select">
              <label> {key} </label>
              <select>
                {stadiumOptions}
              </select>
            </div>
          )
        }
      }
    });
  }

  render() {
    let playerImage, playerStats;
    if (this.props.search[0]) {
      playerImage = <img src={this.props.search[0].player.image_url} role="presentation"/>;
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

        <form onSubmit={this.onFieldSubmit} className='filter-form'>
          {this.renderFilters()}
          <button type='Submit' className='button filter-form-select-button'>Submit</button>
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
  return { players: state.players, search: state.query, modal: state.modal  };
}

DIYStatsView.propTypes = {
  players: React.PropTypes.array.isRequired,
  search: React.PropTypes.array.isRequired,
  modal: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchSpecificPlayers, filterPlayers, getOnePlayerModal, filterByDay })(DIYStatsView);

// <div className="filter-form-select">
//   <label htmlFor="teamSelect"> AGAINST A TEAM </label>
//   <select data="teamVal" id="teamSelect">
//     {teamOptions}
//   </select>
// </div>

// <input type="checkbox" name="0" /> Against a Team
// <input type="checkbox" name="1" /> On a Day of the Week
// <input type="checkbox" name="2" /> At a Specific Stadium
// <input type="checkbox" name="3" /> At Home/Away
// <input type="checkbox" name="4" /> Under Specific Weather Conditions
// <input type="checkbox" name="5" /> Started/Benched
// <input type="checkbox" name="5" /> Playing Surface
