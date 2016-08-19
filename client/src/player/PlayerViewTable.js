import React from 'react';
import PlayerListView from './PlayerListView';
import StatHeadings from './StatHeadings.jsx';
import RadarChart from '../graph/RadarChart';

export const PlayerViewTable = () => (
  <div className="player-table">
    <table>
      <StatHeadings />
      <PlayerListView />
    </table>
    <RadarChart />
  </div>
);
