import { combineReducers } from 'redux';
import YahooProfileReducer from './reducer_yahooProfile';
import PlayersReducer from './reducer_players';
import Header from './reducer_header';

const rootReducer = combineReducers({
  yahooProfile: YahooProfileReducer,
  header: Header,
  players: PlayersReducer,
});

export default rootReducer;
