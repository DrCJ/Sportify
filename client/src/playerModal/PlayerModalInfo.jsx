import React from 'react';
import PlayerTweets from './PlayerTweets.jsx';


const PlayerModalInfo = ({ modal }) => (
  <div className="modal-player-info">
    <div className="player-modal-img">
      <img
        className="modal-player-image" height="150" width="90" role="presentation"
        src={modal[0][0][0].image_url ? modal[0][0][0].image_url : 'hello' || 'http://photos.state.gov/libraries/poland/8755/july2012/football.jpg'}
      />
    </div>
    <ul className="statistics-twitter-list">
      <PlayerTweets tweets={modal[1]} />
    </ul>
  </div>
);

PlayerModalInfo.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerModalInfo;
