import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from '../compare/actions';
import { getOnePlayerModal } from '../player/actions';
import { filterByDay, calculateDifference } from './actions';
import StatHeadings from '../player/StatHeadings.jsx';
import filters from '../helpers/filterCategories';
import teams from '../helpers/teamNames';
import stadiums from '../helpers/stadiumNames';


class DIYStatsView extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onFieldSubmit = this.onFieldSubmit.bind(this);
  }

  onFieldSubmit(event) {
    event.preventDefault();
    const reqObj = {};
    reqObj.Opponent = event.target[0].value;
    reqObj.HomeOrAway = event.target[1].value;
    reqObj.Started = event.target[2].value;
    reqObj.Stadium = event.target[3].value;
    reqObj.PlayingSurface = event.target[4].value;
    reqObj.Day = event.target[5].value;
    this.props.filterByDay(this.props.modal, reqObj);
  }

  onSearch(event) {
    event.preventDefault();
    this.props.fetchSpecificPlayers({ playerNames: [event.target[0].value, event.target[0].value] })
    .then(() => {
      const playerIdArray = { playerId:[this.props.search[0].playerId] };
      this.props.getOnePlayerModal(playerIdArray);
    });
  }

  renderStats() {
    return this.props.players.map((player, index) => {
      if (index !== 0) {
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
      }
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
            <div className="filter-form-select" key={index}>
              <label> {key} </label>
              <select>
                <option value=''>Select Here</option>
                {this.renderOptions(filter[key])}
              </select>
            </div>
          );
        } else if (filter[key] === 'teamOptions'){
          return (
            <div className="filter-form-select" key={index}>
              <label> {key} </label>
              <select>
                <option value=''>Select Here</option>
                {teamOptions}
              </select>
            </div>
          );
        } else if (filter[key] === 'stadiumOptions'){
          return (
            <div className="filter-form-select" key={index}>
              <label> {key} </label>
              <select>
                <option value=''>Select Here</option>
                {stadiumOptions}
              </select>
            </div>
          );
        }
      }
    });
  }
  renderStatement() {
    if (this.props.players[0].type === 'CALCULATE_DIFFERENCE') {
      let adjective, filterString = '';
      this.props.players[0].filterHistory.map((filter) => {
        filterString += filter + ', ';
      });
      this.props.players[0].payload > 0 ? adjective = 'better' : adjective = 'worse';
      return (<h3>{this.props.search[0].Name} is {this.props.players[0].payload.toFixed(2)}% {adjective} against these factors: {filterString}</h3>);
    }
  }
  render() {
    let playerImage, playerStats;
    if (this.props.search[0]) {
      playerImage = <img src={this.props.search[0].player.image_url.substring(155)} width="240px" role="presentation"/>;
    }
    return (
      <div className="center-content">
        <h1>DIY Stats View</h1>
        <div className="search-container">
          <form onSubmit={this.onSearch}>
            <input type="text" name="name" placeholder="SEARCH" />
            <noscript>
            <button type="Submit" >Submit</button>
            </noscript>
          </form>
        </div>
        <div className='DIYStatement'>
          {this.renderStatement()}
        </div>
        <div className='DIYPlayer'>
          {playerImage}
        </div>
        <form onSubmit={this.onFieldSubmit} className='filter-form'>
          {this.renderFilters()}
          <button type='Submit' className='button filter-form-select-button'>Submit</button>
        </form>

        <table>
          <StatHeadings />
          {this.renderStats()}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players, search: state.query, modal: state.modal, calculation: state.calculation  };
}

DIYStatsView.propTypes = {
  players: React.PropTypes.array.isRequired,
  search: React.PropTypes.array.isRequired,
  modal: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchSpecificPlayers, filterByDay, getOnePlayerModal, calculateDifference })(DIYStatsView);
