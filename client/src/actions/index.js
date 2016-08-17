import axios from 'axios';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const FETCH_LEAGUES = 'FETCH_LEAGUES';
export const FETCH_SPECIFIC_PLAYERS = 'FETCH_SPECIFIC_PLAYERS';
// export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const CANCEL_NAVIGATION = 'CANCEL_NAVIGATION';
// export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CANCEL_MODAL = 'CANCEL_MODAL';
export const REQUEST_ALL_PLAYERS = 'REQUEST_ALL_PLAYERS';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';
export const GET_ONE_PLAYER_MODAL = 'GET_ONE_PLAYER_MODAL';
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';


// Toggles shadow navigation for off-canvas navigation bar
export function toggleNavigation() {
  const navCanvasClick = document.getElementsByClassName('nav-canvas');
  const mainContentClick = document.getElementsByClassName('main-content');
  const shadowClick = document.getElementsByClassName('shadow');

  const navOpen = () => {
    navCanvasClick[0].className = 'nav-canvas-clicked';
    mainContentClick[0].className = 'main-content-clicked';
    shadowClick[0].className = 'shadow-click';
  };

  return {
    type: TOGGLE_NAVIGATION,
    payload: navOpen(),
  };
}

export function closeNavigation() {
  const mainContentClosed = document.getElementsByClassName('main-content-clicked');
  const shadowClosed = document.getElementsByClassName('shadow-click');
  const navCanvasClosed = document.getElementsByClassName('nav-canvas-clicked');

  const navClose = () => {
    navCanvasClosed[0].className = 'nav-canvas';
    mainContentClosed[0].className = 'main-content';
    shadowClosed[0].className = 'shadow';
  };

  return {
    type: CANCEL_NAVIGATION,
    payload: navClose(),
  };
}

// Toggles the shadow-modal and modal back to normal

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

// Toggles shadow navigation for player modal

export function requestAllPlayers() {
  const request = axios.get('/api/getAllPlayers');
  return {
    type: REQUEST_ALL_PLAYERS,
    payload: request,
  };
}

// for getPlayersByParams

//  props shape
// {
//   orderBy: stat,
//   tableName: playerProjectedYears,
//   filters: {
//     Team: this.props.fields.team.value,
//     Week: this.props.fields.weekly.value,
//     Position: this.props.fields.position.value,
//   }
// }
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
    type: FILTER_PLAYERS,
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
    type: GET_ONE_PLAYER_MODAL,
    payload: request,
  };
}

export function changeSearchText(string) {
  return {
    type: CHANGE_SEARCH_TEXT,
    string,
  };
}
