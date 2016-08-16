import axios from 'axios';
import { CANCEL_MODAL, GET_ONE_PLAYER_MODAL } from './actionTypes';

export function closeModal() {
  const modalClose = () => {
    document.getElementsByClassName('shadow-modal-click')[0].className = ('shadow-modal');
    document.getElementsByClassName('modal-click')[0].className = ('modal');
  };
  return {
    type: CANCEL_MODAL,
    payload: modalClose(),
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
    type: GET_ONE_PLAYER_MODAL,
    payload: request,
  };
}
