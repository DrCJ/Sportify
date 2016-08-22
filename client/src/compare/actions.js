import axios from 'axios';

const fetchSpecificPlayers = (playerId) => {
  const request = axios.post('/api/getPlayersByName', playerId);
  return {
    type: 'FETCH_SPECIFIC_PLAYERS',
    payload: request,
  };
};

export default fetchSpecificPlayers;
