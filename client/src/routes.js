import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './app/App';
import Compare from './compare';
import StatisticsOverview from './statisticsChart/StatisticsOverview.jsx';
import Schedule from './schedule';
import TeamView from './yahooTeam';
import PlayerView from './player';
import LeagueOverview from './league';
import DIYStatsView from './diyStats';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PlayerView} />
    <Route path="compare" component={Compare} />
    <Route path="schedule" component={Schedule} />
    <Route path="player" component={PlayerView} />
    <Route path="LeagueOverview" component={LeagueOverview} />
    <Route path="DIYStats" component={DIYStatsView} />
    <Route path="Statistics" component={StatisticsOverview} />
    <Route path="TeamView/:league_key" component={TeamView} />
	</Route>
);
