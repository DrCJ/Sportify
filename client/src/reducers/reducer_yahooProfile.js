import { FETCH_ROSTER } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ROSTER:
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
