import { REQUEST_ALL_PLAYERS } from '../actions/index.js';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ALL_PLAYERS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
