import axios from 'axios';

export const fetchSpecificPlayers = (playerId) => {
  const request = axios.post('/api/getPlayersByName', playerId);
  return {
    type: 'FETCH_SPECIFIC_PLAYERS',
    payload: request,
  };
};
