import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComparePlayers extends Component {

  render() {
    if(!this.props.players[0][0]) {
      return <div> loading </div>;
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
          {this.props.players[0][1].Name}
          <img
            className="player2-image"
            src={this.props.players[0][1].player.image_url.substring(155)}
          />
        </div>
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.query };
}

export default connect(mapStateToProps)(ComparePlayers);
