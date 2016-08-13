import { REQUEST_ALL_PLAYERS, FILTER_PLAYERS, FETCH_SPECIFIC_PLAYERS } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ALL_PLAYERS:
      return action.payload.data;
    case FILTER_PLAYERS:
      return action.payload.data[0];
    case FETCH_SPECIFIC_PLAYERS:
      return action.payload.data[0];
    default:
      return state;
  }
}
