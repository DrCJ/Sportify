import axios from 'axios';
import { FETCH_ROSTER } from '../actions';

export function fetchRoster(league_key) {
  const request = axios.get(`/roster/${league_key}`).then((team) => {
    const playerId = [];
    for (let i = 0; i < team.data.length; i++) {
      playerId.push(Number(team.data[i].player_id));
    }
    const statsRequest = axios.post('/api/getPlayersByIds', { playerId })
      .then((stats) => {
        return { players: team.data, stats: stats.data[0] };
      });

    return statsRequest;
  });
  return {
    type: FETCH_ROSTER,
    payload: request,
  };
}
