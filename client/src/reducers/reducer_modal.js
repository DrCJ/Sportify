const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ONE_PLAYER_MODAL':
      action.payload.data[0].sort((a, b) => a.Week - b.Week);
      return action.payload.data;
    default:
      return state;
  }
}
