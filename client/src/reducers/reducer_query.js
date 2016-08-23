const INITIAL_STATE =
  [
    [
      { Name: 'Aaron', player: { image_url: 'http://127.0.0.1/assets/profile_default.jpg' } },
      { Name: 'Cam', player: { image_url: 'http://127.0.0.1/assets/profile_default.jpg' } },
    ],
  ];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_SPECIFIC_PLAYERS':
      return action.payload.data;
    default:
      return state;
  }
}
