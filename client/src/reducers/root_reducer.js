import { combineReducers } from 'redux';
import YahooProfileReducer from './reducer_yahooProfile';
import Header from './reducer_header';

const rootReducer = combineReducers({
  yahooProfile: YahooProfileReducer,
  header: Header,
});

export default rootReducer;
