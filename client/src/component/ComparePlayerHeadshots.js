import React, { Component } from 'react';

export default class ComparePlayers extends Component {
  render() {
    return (
      <div className="compare-container">
        <div className="compare-player1">
        	<div>{this.props.players[1].Name}</div>
        	<img className="player2-image" src={this.props.players[1].image_url}></img>
        </div>
        <div className="compare-player2">
        	<div>{this.props.players[0].Name}</div>
        	<img className="player2-image" src={this.props.players[0].image_url}></img>
      </div>
      </div>
		);
  }
}
