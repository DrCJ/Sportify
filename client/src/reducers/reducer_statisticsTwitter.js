const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_PLAYER_TWEETS':
      // console.log(action.payload.data)
      return action.payload;
    default:
      return state;
  }
}
