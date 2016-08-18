import { FETCH_SPECIFIC_PLAYERS } from '../compare/actionTypes';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_SPECIFIC_PLAYERS':
      return action.payload.data[0];
    default:
      return state;
  }
}
