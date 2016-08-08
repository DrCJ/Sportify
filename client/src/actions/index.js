import axios from 'axios';

export const FETCH_ROSTER = 'FETCH_ROSTER';

export function fetchRoster() {
  const request = axios.get('/roster');
  return {
    type: FETCH_ROSTER,
    payload: request,
  };
}

