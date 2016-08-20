import React from 'react';
import PlayerModalTableBodyRow from './PlayerModalTableBodyRow.jsx';

const PlayerModalTableBody = ({ modal }) => (
  <tbody>
    {modal.map((week, i) => <PlayerModalTableBodyRow week={week} key={i}/>)}
  </tbody>
);

PlayerModalTableBody.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerModalTableBody;
