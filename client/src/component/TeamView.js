import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import YahooProfileImage from '../containers/YahooProfileImage';
import PlayerFilterForm from '../containers/PlayerFilterForm';
import { PlayerEntryView } from '../component/PlayerEntryView';
import { fetchRoster } from '../actions/index';

class TeamView extends Component {
  componentWillMount() {
    this.props.fetchRoster(this.props.params.league_key);
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
            <thead>
              <tr>
                <td>Offense</td>
                <td>Position</td>
                <td>GP*</td>
                <td>Opp</td>
                <td>Proj</td>
                <td>Actual</td>
                <td>Yds</td>
                <td>TD</td>
                <td>Int</td>
                <td>Att*</td>
                <td>Yds</td>
                <td>TD</td>
                <td>Tgt*</td>
                <td>Rec</td>
                <td>RshTD</td>
                <td>RecTD</td>
                <td>2PT</td>
                <td>Carlos </td>
              </tr>
            </thead>
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
