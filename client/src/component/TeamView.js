import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import YahooProfileImage from '../containers/YahooProfileImage';
import PlayerFilterForm from '../containers/PlayerFilterForm';
import StatHeadings from './StatHeadings.jsx';

import { PlayerEntryView } from '../component/PlayerEntryView';
import { fetchRoster } from '../actions/index';

class TeamView extends Component {
  componentWillMount() {
    // this.props.fetchRoster(this.props.params.league_key);
  }

  renderRoster() {
    return this.props.yahooProfile.stats.map((player, index) => {
      return (
        <tbody key={index}>
          <PlayerEntryView key={player.id} player={player} />
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
  return { yahooProfile: state.yahooProfile };
}

export default connect(mapStateToProps, { fetchRoster })(TeamView);
