import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComparePlayers extends Component {

  render() {
    let playerTwo;
    if(!this.props.players[0][0]) {
      return <div> loading </div>;
    }
    if (this.props.players[0][1]) {
      playerTwo = <div><p>{this.props.players[0][1].Name}</p>
                  <img
                    className="player2-image"
                    src={this.props.players[0][1].player.image_url.substring(155)}
                  /></div>;
    }
    return (
      <div className="compare-container">
        <div className="compare-player1">
          {this.props.players[0][0].Name}
          <img
            className="player2-image"
            src={this.props.players[0][0].player.image_url.substring(155)}
          />
        </div>
        <div className="compare-player2">
          {playerTwo}
        </div>
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.query };
}

export default connect(mapStateToProps)(ComparePlayers);
