import { CHANGE_SEARCH_TEXT } from '../actions/index.js';

const INITIAL_STATE = {
  searchString: '',
  headings: [
    'Name',
    'Position',
    'Team',
    'Played',

    //  Fan Pts
    'FantasyPointsYahoo',
    'FantasyPointsPPR',

    //  Passing
    'PassingYards',
    'PassingCompletions',
    'PassingTouchdowns',
    'PassingInterceptions',

    //  Rushing
    'RushingYards',
    'RushingTouchdowns',

    //  Recieving
    'ReceivingYards',
    'Receptions',
    'ReceivingTouchdowns',

    //  Misc
    // '2PT',  -> 2PT is split into multiple db fields
    'TwoPointConversionPasses',
    'Fumbles',
    'Carlos',
  ],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, { searchString: action.string });
    default:
      return state;
  }
}
