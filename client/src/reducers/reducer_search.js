import { CHANGE_SEARCH_TEXT } from '../actions/index.js';

const INITIAL_STATE = {
  searchString: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, { searchString: action.string });
    default:
      return state;
  }
}
