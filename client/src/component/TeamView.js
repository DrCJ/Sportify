import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import YahooProfileImage from '../containers/YahooProfileImage';
import PlayerFilterForm from '../containers/PlayerFilterForm';
import StatHeadings from './StatHeadings.jsx';

import { PlayerEntryView } from '../component/PlayerEntryView';
import { fetchRoster, getOnePlayerModal } from '../actions/index';

class TeamView extends Component {
  componentWillMount() {
    this.props.fetchRoster(this.props.params.league_key);
  }

  handleClick(playerId) {
    const playerIdArray = { playerId:[playerId] };
    console.log('playerIdArray ' , playerIdArray);
    this.props.getOnePlayerModal(playerIdArray)
      .then((data) => console.log(data));
  }

  renderRoster() {
    return this.props.yahooProfile.stats.map((player, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td> <a onClick={this.handleClick.bind(this, player.playerId)}> {player.Name || player.full }</a></td>
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
    return (
      <div className="center-content">
        <Link to="/LeagueOverview">Back to My Leagues</Link>
        <h1>Team View</h1>
        <PlayerFilterForm />
        <div className="player-table">
          <table>
            <StatHeadings />
            {this.renderRoster()}
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    yahooProfile: state.yahooProfile,
    modal: state.modal,
 };
}

export default connect(mapStateToProps, { fetchRoster, getOnePlayerModal })(TeamView);
