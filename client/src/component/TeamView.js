import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import YahooProfileImage from '../containers/YahooProfileImage';

import { fetchRoster } from '../actions/index';

class TeamView extends Component {
  componentWillMount() {
    this.props.fetchRoster(this.props.params.league_key);
  }

  renderRoster() {
    return this.props.yahooProfile.stats.map((player, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>
              <Link to={`posts/${index}`}>
                <span>{player.Name}</span>
              </Link>
            </td>
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
            <td>{player.TwoPointConversionReturns || 0}</td>
            <td />
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
        <div className="none">
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
