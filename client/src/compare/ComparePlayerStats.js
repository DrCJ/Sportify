import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComparePlayerStats extends Component {
  renderStats() {
    let playerTwo;
    return statIndex.map((stat, index) => {
      if (this.props.players[0][1]) {
        playerTwo = <td>{this.props.players[0][1][stat]}</td>;
      }
      return (
        <tr key={index}>
          <td>{stat}</td>
          <td>{this.props.players[0][0][stat]}</td>
          {playerTwo}
        </tr>
      );
    });
  }

  render() {
    if(!this.props.players[0][0]) {
      return <div> loading </div>;
    }
    return (
      <div className="player-table compare">
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
  return { players: state.query };
}

export default connect(mapStateToProps)(ComparePlayerStats);

const statIndex = ['Position', 'Played', 'Opponent', 'FantasyPointsYahoo', 'PassingYards',
'PassingTouchdowns', 'PassingInterceptions', 'PassingAttempts', 'RushingYards', 'RushingTouchdowns',
'ReceivingTargets', 'ReceivingYardsPerTarget', 'ReceivingTouchdowns', 'TwoPointConversionReturns'];
