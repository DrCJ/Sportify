import React, { Component } from 'react';

export default class Compare extends Component {
  render() {
    return (
      <div className="compare-container">
        <div className="compare-player1">
        	<div> Player 1 </div>
        	<img className="player2-image" src="http://l.yimg.com/iu/api/res/1.2/g3jqNde0QtPbQtNbZu0W4A--/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/20141101/7200.png"></img>
        	<span> Stats </span>
        </div>
        <div className="switch-player">
        	<button className="inline-button"> Button 1</button>
        	<button className="inline-button"> Button 2</button>
        </div>
        <div className="compare-player2">
        	<div> Player 2 </div>
        	<img className="player2-image" src="http://l.yimg.com/iu/api/res/1.2/g3jqNde0QtPbQtNbZu0W4A--/YXBwaWQ9c2hhcmVkO2NoPTIzMzY7Y3I9MTtjdz0xNzkwO2R4PTg1NztkeT0wO2ZpPXVsY3JvcDtoPTYwO3E9MTAwO3c9NDY-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/20141101/7200.png"></img>
        </div>
      </div>
		);
  }
}
