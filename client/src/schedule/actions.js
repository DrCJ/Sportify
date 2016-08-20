import axios from 'axios';
import { GET_GAMES_SCHEDULE } from './actionTypes';

export function getGamesSchedule(week) {
  const request = axios({
    method: 'post',
    url: '/api/getGamesSchedule',
    data: week,
    header: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: 'GET_GAMES_SCHEDULE',
    payload: request,
  };
}
