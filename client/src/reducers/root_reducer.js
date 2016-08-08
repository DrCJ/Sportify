import { combineReducers } from 'redux';
import YahooProfileReducer from './reducer_yahooProfile';

const rootReducer = combineReducers({
  yahooProfile: YahooProfileReducer,
});

export default rootReducer;
