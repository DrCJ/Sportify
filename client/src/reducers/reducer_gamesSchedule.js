import { GET_GAMES_SCHEDULE } from '../schedule/actionTypes';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GAMES_SCHEDULE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
