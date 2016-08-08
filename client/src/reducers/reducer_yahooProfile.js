import { FETCH_ROSTER } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ROSTER:
      // return { ...state, tempTableData: action.payload.data };
      return state.concat(action.payload.data);
      // return Object.assign({}, state, { tempTableData: action.payload.data });
    default:
      return state;
  }
}
