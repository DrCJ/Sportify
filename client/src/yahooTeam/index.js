import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import StatHeadings from '../player/StatHeadings.jsx';
import PlayerEntryView from '../player/PlayerEntryView';

import { fetchRoster } from './actions';
import { getOnePlayerModal } from '../playerModal/actions';

class TeamView extends Component {
  componentDidMount() {
    this.props.fetchRoster(this.props.params.league_key);
  }

  handleClick(playerId) {
    const playerIdArray = { playerId:[playerId] };
    this.props.getOnePlayerModal(playerIdArray);
  }

  renderRoster() {
    return this.props.yahooProfile.stats[0].map((player, index) => {
      if(player.Week === 1 && player.Season === 2016) {
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
      <div>
        <div className="mathead-bg"></div>
        <div className="center-content">
          <h1 className="team-view-headline">Team View</h1>
          <div className="player-table team-view">
            <table>
              <StatHeadings />
              {this.renderRoster()}
            </table>
          </div>
          <Link to="/LeagueOverview" className="back-btn">Back to My Leagues</Link>
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
