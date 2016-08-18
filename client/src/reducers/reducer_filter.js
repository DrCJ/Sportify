import { TOGGLE_NAVIGATION } from '../header/actionTypes';

const INITIAL_STATE = ['nav-canvas'];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return state.concat(action.payload);
    default:
      return state;
  }
}
