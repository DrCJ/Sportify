import React from 'react';
import { PlayerModalTableBody } from './PlayerModalTableBody';

export const PlayerModalTable = ({ modal }) => (
  <table className="modal-table">
    <thead>
      <tr>
        <td> Week </td>
        <td> Fantasy </td>
        <td> Opp </td>
        <td> Yds </td>
        <td> TD </td>
      </tr>
    </thead>
    <PlayerModalTableBody modal={modal} />
  </table>
);