import React from 'react';

export const PlayerModalInfo = ({ modal }) => (
  <div className="modal-player-info">
  {console.log(modal, 'modal')}
    <img className="modal-player-image" src={modal.image_url ? modal.image_url.substring(155) : 'hello' || 'http://photos.state.gov/libraries/poland/8755/july2012/football.jpg'} height="150" width="90" /> 
    <span className="modal-player-bio">
      <ul>
        <li> {`Team ${modal.Team}` || 'empty'} || {`${modal.Position}` || 'empty'} </li>
        <li> {modal.InjuryStatus || 'empty'} </li>
      </ul>
    </span>
  </div>
);