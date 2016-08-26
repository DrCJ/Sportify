const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ONE_PLAYER_MODAL':
      const deepCopy = JSON.parse(JSON.stringify(action.payload.data));
      deepCopy[0][0].sort((a, b) => a.Week - b.Week);
      deepCopy[0][0].splice(0, 1);
      return deepCopy;
    default:
      return state;
  }
}
