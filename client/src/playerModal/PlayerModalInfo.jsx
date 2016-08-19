import React from 'react';

const PlayerModalInfo = ({ modal }) => (
  <div className="modal-player-info">
    <img
      className="modal-player-image" height="150" width="90" role="presentation"
      src={modal.image_url ? modal.image_url.substring(155) : 'hello' || 'http://photos.state.gov/libraries/poland/8755/july2012/football.jpg'}
    />
    <span className="modal-player-bio">
      <ul>
        <li> {`Team ${modal.Team}` || 'empty'} || {`${modal.Position}` || 'empty'} </li>
        <li> {modal.InjuryStatus || 'empty'} </li>
      </ul>
    </span>
  </div>
);

PlayerModalInfo.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerModalInfo;
