import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import StatHeadings from '../player/StatHeadings.jsx';
import PlayerEntryView from '../player/PlayerEntryView';

import { fetchRoster } from './actions';
import { getOnePlayerModal } from '../playerModal/actions';

class TeamView extends Component {
  componentWillMount() {
    this.props.fetchRoster(this.props.params.league_key);
  }

  handleClick(playerId) {
    const playerIdArray = { playerId:[playerId] };
    this.props.getOnePlayerModal(playerIdArray);
  }

  renderRoster() {
    return this.props.yahooProfile.stats[0].map((player, index) => {
      if(player.Week === 1) {
        return (
          <tbody key={index}>
            <PlayerEntryView key={player.id} player={player} />
          </tbody>
        );
      }
    });
  }

  render() {
    return (
      <div className="center-content">
        <Link to="/LeagueOverview">Back to My Leagues</Link>
        <h1>Team View</h1>
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
