import React from 'react';
import { PlayerModalTableBodyRow } from './PlayerModalTableBodyRow';

export const PlayerModalTableBody = ({ modal }) => (
  <tbody>
    {modal.map(week => <PlayerModalTableBodyRow week={week} />)}
  </tbody>
);
