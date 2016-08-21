import React from 'react';
import teamImages from '../teamsImageConstant';

const ScheduleGamesListEntry = ({ awayTeam, homeTeam, date }) => (
  <div className="schedule-game">
    <span className="team1">{awayTeam + date}
      <img className="schedule-image" alt={awayTeam} src={teamImages[awayTeam]} />
    </span>
    <span className="team2">{homeTeam}
      <img className="schedule-image" alt={homeTeam} src={teamImages[homeTeam]} />
    </span>
  </div>
);

export default ScheduleGamesListEntry;
