import React, { Component } from 'react';

export default class ComparePlayers extends Component {
  render() {
    return (
      <div className="compare-container">
        <div className="compare-player1">
        	<div> Player 1 </div>
        	<img className="player2-image" src="https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/20141101/7200.png"></img>
        	<span> Stats </span>
        </div>
        <div className="switch-player">
        	<button className="inline-button"> Button 1</button>
        	<button className="inline-button"> Button 2</button>
        </div>
        <div className="compare-player2">
        	<div> Player 2 </div>
        	<img className="player2-image" src="https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/20141101/7200.png"></img>
          <span> Stats </span>
      </div>
      </div>
		);
  }
}
