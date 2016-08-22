import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComparePlayers extends Component {

  render() {
    if(!this.props.search[0]) {
      return <div> loading </div>;
    }

    let playerImage1;
    let playerImage2;
    if (this.props.search[0].player) {
      playerImage1 = <img className="player2-image" src={this.props.search[0].player.image_url.substring(155)}></img>;
      playerImage2 = <img className="player2-image" src={this.props.search[1].player.image_url.substring(155)}></img>;
    }
    return (
      <div className="compare-container">
        <div className="compare-player1">
          {this.props.search[0].Name}
          {playerImage1}
        </div>
        <div className="compare-player2">
          {this.props.search[1].Name}
          {playerImage2}
        </div>
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { search: state.query };
}

export default connect(mapStateToProps)(ComparePlayers);
