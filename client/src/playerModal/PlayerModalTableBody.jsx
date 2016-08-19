import React from 'react';
import PlayerModalTableBodyRow from './PlayerModalTableBodyRow.jsx';

const PlayerModalTableBody = ({ modal }) => (
  <tbody>
    {modal.map(week => <PlayerModalTableBodyRow week={week} />)}
  </tbody>
);

PlayerModalTableBody.propTypes = {
  modal: React.PropTypes.array.isRequired,
};

export default PlayerModalTableBody;
