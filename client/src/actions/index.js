import axios from 'axios';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const FETCH_SPECIFIC_PLAYERS = 'FETCH_SPECIFIC_PLAYERS';
export const FETCH_LEAGUES = 'FETCH_LEAGUES';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const CANCEL_NAVIGATION = 'CANCEL_NAVIGATION';
export const REQUEST_ALL_PLAYERS = 'REQUEST_ALL_PLAYERS';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';
export const GET_ONE_PLAYER_MODAL = 'GET_ONE_PLAYER_MODAL';

export function fetchRoster(league_key) {
  const request = axios.get(`/roster/${league_key}`).then((team) => {
    const playerId = [];
    for (let i = 0; i < team.data.length; i++) {
      playerId.push(Number(team.data[i].player_id));
    }
    const statsRequest = axios.post('/api/getAllTeamPlayers', { playerId })
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

export function fetchLeagues() {
  const request = axios.get('/leagues');
  return {
    type: FETCH_LEAGUES,
    payload: request,
  };
}

export function fetchSpecificPlayers(playerId) {
  const request = axios.post('/api/getAllTeamPlayers', playerId).then((players) => {
    players.data[0].map((player) => {
      console.log(player);
      player.image_url = player.image_url.substring(155);
      return player;
    });

    return players;
  });
  return {
    type: FETCH_SPECIFIC_PLAYERS,
    payload: request,
  };
}

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

export function requestAllPlayers() {
  const request = axios.get('/api/getAllPlayers');
  return {
    type: REQUEST_ALL_PLAYERS,
    payload: request,
  };
}

export function filterPlayers(props) {
  const request = axios({
    method: 'post',
    url: '/api/getAllPlayers',
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
