import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineChart from '../graph/LineChart';


class ComparePlayers extends Component {

  render() {
    let playerTwo;
    if(!this.props.players[0][0]) {
      return <div> loading </div>;
    }
    if (this.props.players[0][1]) {
      playerTwo = <div className="playerinfo">
        {this.props.players[0][1].Name} <div className="compare-player2">
        <img className="player2-image" src={this.props.players[0][1].player.image_url}
        /></div></div>;
    }
    return (
      <div className="compare-container">
        <h3>Projected Fantasy Points per Weeks</h3>
        <div className="playerinfo">
          {this.props.players[0][0].Name}
          <div className="compare-player1">
            <img className="player2-image" src={this.props.players[0][0].player.image_url} alt="" />
          </div>
        </div>
        <div className="line-chart-container">
          <LineChart />
        </div>
        {playerTwo}
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.query };
}

export default connect(mapStateToProps)(ComparePlayers);
