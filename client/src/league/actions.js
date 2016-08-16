import axios from 'axios';
import { FETCH_LEAGUES } from '../actions';

export function fetchLeagues() {
  const request = axios.get('/leagues');
  return {
    type: FETCH_LEAGUES,
    payload: request,
  };
}
