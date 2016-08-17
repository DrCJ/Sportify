import axios from 'axios';
import { FETCH_SPECIFIC_PLAYERS } from './actionTypes';

export function fetchSpecificPlayers(playerId) {
  const request = axios.post('/api/getPlayersByName', playerId);
  return {
    type: 'FETCH_SPECIFIC_PLAYERS',
    payload: request,
  };
};
