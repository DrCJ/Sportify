import React from 'react';
import PlayerListView from '../containers/PlayerListView';

export const PlayerViewTable = () => (
  <div className="player-table">
    <table>
      <thead>
        <tr>
          <td>Offense</td>
          <td>Position</td>
          <td>GP*</td>
          <td>Opp</td>
          <td>Proj</td>
          <td>Actual</td>
          <td>Yds</td>
          <td>TD</td>
          <td>Int</td>
          <td>Att*</td>
          <td>Yds</td>
          <td>TD</td>
          <td>Tgt*</td>
          <td>Rec</td>
          <td>RshTD</td>
          <td>RecTD</td>
          <td>2PT</td>
          <td>Carlos </td>
        </tr>
      </thead>
      <PlayerListView />
    </table>
  </div>
);