import { FETCH_LEAGUES } from '../league/actionTypes';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_LEAGUES':
      return action.payload.data;
    default:
      return state;
  }
}
