import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './component/App';
import Compare from './component/Compare';
import Schedule from './component/Schedule';
import TeamView from './component/TeamView';
import PlayerView from './containers/PlayerView';
import LeagueOverview from './component/LeagueOverview';
import YahooTeams from './containers/YahooTeams';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PlayerView} />
    <Route path="compare" component={Compare} />
    <Route path="schedule" component={Schedule} />
    <Route path="player" component={PlayerView} />
    <Route path="YahooProfile" component={YahooTeams}>
      <Route path="LeagueOverview" component={LeagueOverview} />
      <Route path="TeamView" component={TeamView} />
    </Route>
	</Route>
);
