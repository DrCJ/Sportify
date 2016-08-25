const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'STATS_GET_PLAYER_TWEETS':
      // console.log(action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
}
