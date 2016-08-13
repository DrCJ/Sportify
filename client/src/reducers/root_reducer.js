import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Leagues from './reducer_leagues';
import YahooProfileReducer from './reducer_yahooProfile';
import PlayersReducer from './reducer_players';
import Header from './reducer_header';
import SearchReducer from './reducer_search';


const rootReducer = combineReducers({
  leagues: Leagues,
  yahooProfile: YahooProfileReducer,
  header: Header,
  players: PlayersReducer,
  form: formReducer,
  search: SearchReducer,
});

export default rootReducer;
