import React from 'react';
import PlayerListView from '../containers/PlayerListView';
import StatHeadings from './StatHeadings.jsx';

export const PlayerViewTable = () => (
  <div className="player-table">
    <table>
      <StatHeadings />
      <PlayerListView />
    </table>
  </div>
);