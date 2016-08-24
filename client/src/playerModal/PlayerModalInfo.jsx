import React from 'react';
import PlayerTweets from './PlayerTweets.jsx';


const PlayerModalInfo = ({ modal }) => (
  <div className="modal-player-info">
    <img
      className="modal-player-image" height="150" width="90" role="presentation"
      src={modal[0][0][0].image_url ? modal[0][0][0].image_url.substring(155) : 'hello' || 'http://photos.state.gov/libraries/poland/8755/july2012/football.jpg'} />
    <PlayerTweets tweets={modal[1]} />
    <span className="modal-player-bio">
      <ul>
        <li> {`Team ${modal[0][0][0].Team}` || 'empty'} || {`${modal[0][0][0].Position}` || 'empty'} </li>
        <li> {modal[0][0][0].InjuryStatus || 'empty'} </li>
      </ul>
    </span>
  </div>
);

PlayerModalInfo.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerModalInfo;
