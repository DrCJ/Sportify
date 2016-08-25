import axios from 'axios';

export function getPlayerTweets(twitterHandle) {
  const request = axios({
    method: 'post',
    url: '/api/getPlayersTweets',
    data: { twitterID: twitterHandle[0], playerImg: twitterHandle[1] },
    header: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: 'GET_PLAYER_TWEETS',
    payload: request,
  };
}
