import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Leagues from './reducer_leagues';
import YahooProfileReducer from './reducer_yahooProfile';
import PlayersReducer from './reducer_players';
import Header from './reducer_header';
import ModalReducer from './reducer_modal';
import SearchReducer from './reducer_search';
import QueryReducer from './reducer_query';
import CalcReducer from './reducer_calculation';
import GamesScheduleReducer from './reducer_gamesSchedule';
import StatisticsTwitterReducer from './reducer_statisticsTwitter';

const rootReducer = combineReducers({
  calculation: CalcReducer,
  leagues: Leagues,
  yahooProfile: YahooProfileReducer,
  header: Header,
  players: PlayersReducer,
  form: formReducer,
  modal: ModalReducer,
  search: SearchReducer,
  query: QueryReducer,
  games: GamesScheduleReducer,
  playerTweets: StatisticsTwitterReducer,
});

export default rootReducer;
