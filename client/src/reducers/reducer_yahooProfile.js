import { FETCH_ROSTER } from '../yahooTeam/actionTypes';

const INITIAL_STATE = { players: [], stats: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_ROSTER':
      return action.payload;
    default:
      return state;
  }
}
