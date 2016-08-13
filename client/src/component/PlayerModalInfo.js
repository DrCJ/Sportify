import React from 'react';

export const PlayerModalInfo = ({ modal }) => (
  <div className="modal-player-info">
    <img src={modal.image_url || 'http://photos.state.gov/libraries/poland/8755/july2012/football.jpg'} height="75px" width="75x"/>  
    <span className="modal-player-bio">
      <ul>
        <li>{modal.full || 'empty'}</li>
        <li>{modal.Team || 'empty'}</li>
        <li>{modal.Position || 'empty'}</li>
      </ul>
    </span>
    <div> Season Stats </div>
  </div>
);