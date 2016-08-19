import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComparePlayerStats extends Component {
  renderStats() {
    return statIndex.map((stat, index) => {
      return (
        <tr>
          <td>{stat}</td>
          <td>{this.props.players[0][0][stat]}</td>
          <td>{this.props.players[0][1][stat]}</td>
        </tr>
      );
    });
  }

  render() {
    if(!this.props.players[0][0]) {
      return <div> loading </div>;
    }
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

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps)(ComparePlayerStats);

const statIndex = ['Position', 'Played', 'Opponent', 'FantasyPointsYahoo', 'PassingYards',
'PassingTouchdowns', 'PassingInterceptions', 'PassingAttempts', 'RushingYards', 'RushingTouchdowns',
'ReceivingTargets', 'ReceivingYardsPerTarget', 'ReceivingTouchdowns', 'TwoPointConversionReturns'];
