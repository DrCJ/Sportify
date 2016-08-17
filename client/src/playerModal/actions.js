import axios from 'axios';
import { CANCEL_MODAL } from './actionTypes';

export function closeModal() {
  const modalClose = () => {
    document.getElementsByClassName('shadow-modal-click')[0].className = ('shadow-modal');
    document.getElementsByClassName('modal-click')[0].className = ('modal');
  };
  return {
    type: 'CANCEL_MODAL',
    payload: modalClose(),
  };
}
