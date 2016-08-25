import React, { Component } from 'react';
import { connect } from 'react-redux';

// import StatisticsComparePreviewList from './StatisticsComparePreviewList.jsx';

class StatisticsComparePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="statistics-preview-container">
        <h3> Compare Preview </h3>
        <div className="statistics-preview-player-image">
          <div> This will be player image </div>
          // Change these to images
          <div> This will be player 2 image </div>
        </div>
        <div className="statistics-preview-player-points">
          <p> Player Points 1 </p>
          <p> Player Points 2</p>
        </div>
        <div className="statistics-preview-link"> View </div>
                // Change this to an Link Router
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
  };
}


export default connect(mapStateToProps, null)(StatisticsComparePreview);
