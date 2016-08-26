const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CALCULATE_DIFFERENCE':
      return action.payload;
    default:
      return state;
  }
}
