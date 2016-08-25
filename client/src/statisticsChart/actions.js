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

export function getTop20Players(position, year, limit) {
  const request = axios({
    method: 'post',
    url: '/api/getProjectedVsActual',
    data: {
      position,
      year,
      limit,
    },
    header: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: 'GET_TOP_20_PLAYERS',
    payload: request,
  };
}
