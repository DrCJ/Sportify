import axios from 'axios';
import { STATS_GET_PLAYER_TWEETS } from './actionTypes';

export function statsGetPlayerTweets(playerName) {
  const request = axios({
    method: 'post',
    url: '/api/statsGetPlayerTweets',
    data: playerName,
    header: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: STATS_GET_PLAYER_TWEETS,
    payload: request,
  };
}
