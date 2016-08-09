import axios from 'axios';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";

export function fetchRoster() {
  const request = axios.get('/roster');
  return {
    type: FETCH_ROSTER,
    payload: request,
  };
}


export function toggleNavigation() {
  const findItem = console.log(document.getElementsByClassName('menu-btn'));
  return {
    type: TOGGLE_NAVIGATION,
    payload: findItem,
	};
}

