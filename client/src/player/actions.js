import axios from 'axios';
import { REQUEST_ALL_PLAYERS, GET_ONE_PLAYER_MODAL, FILTER_PLAYERS } from './actionTypes';

export function requestAllPlayers() {
  const request = axios.get('/api/getAllPlayers');
  return {
    type: 'REQUEST_ALL_PLAYERS',
    payload: request,
  };
}

export function getOnePlayerModal(playerId) {
  const request = axios({
    method: 'post',
    url: '/api/getPlayersByIds',
    data: playerId,
    header: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: 'GET_ONE_PLAYER_MODAL',
    payload: request,
  };
}

export function filterPlayers(props) {
  const request = axios({
    method: 'post',
    url: '/api/getPlayersByParams',
    data: props,
    header: {
      'Content-Type': 'application/json',
    },
  });
  return {
    type: 'FILTER_PLAYERS',
    payload: request,
  };
}
