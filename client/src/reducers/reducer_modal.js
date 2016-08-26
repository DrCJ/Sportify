const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ONE_PLAYER_MODAL':
      console.log(action.payload.data[0][0], '??');
      action.payload.data[0][0].map(week => {if (week.Season === 2015) { return week }}).sort((a, b) => a.Week - b.Week);
      return action.payload.data;
    default:
      return state;
  }
}
