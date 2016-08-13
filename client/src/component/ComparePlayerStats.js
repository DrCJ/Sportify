import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ComparePlayerStats extends Component {
  renderStats() {
    return statIndex.map((stat, index) => {
      return (
        <tr>
          <td>{stat}</td>
          <td>{this.props.players[1][stat]}</td>
          <td>{this.props.players[0][stat]}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Stats</td>
              <td>Current Player</td>
              <td>Opposing Player</td>
            </tr>
          </thead>
          <tbody>
            {this.renderStats()}
          </tbody>
        </table>
      </div>
		);
  }
}

const statIndex = ['Position', 'Played', 'Opponent', 'FantasyPointsYahoo', 'PassingYards',
'PassingTouchdowns', 'PassingInterceptions', 'PassingAttempts', 'RushingYards', 'RushingTouchdowns',
'ReceivingTargets', 'ReceivingYardsPerTarget', 'ReceivingTouchdowns', 'TwoPointConversionReturns'];
