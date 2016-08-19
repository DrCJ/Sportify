import { REQUEST_ALL_PLAYERS, FILTER_PLAYERS } from '../player/actionTypes';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_ALL_PLAYERS':
      return action.payload.data;
    case 'FILTER_PLAYERS':
      return action.payload.data[0];
    case 'FILTER_BY_DAY':
      return action.payload.data[0];
    default:
      return state;
  }
}
