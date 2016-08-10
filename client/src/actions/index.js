import axios from 'axios';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function fetchRoster() {
  const request = axios.get('/roster');
  return {
    type: FETCH_ROSTER,
    payload: request,
  };
}


export function toggleNavigation() {
  const navCanvasClick = document.getElementsByClassName('nav-canvas');
  const mainContentClick = document.getElementsByClassName('main-content');
  const navCanvasClosed = document.getElementsByClassName('nav-canvas-clicked');
  const mainContentClosed = document.getElementsByClassName('main-content-clicked');

  const navOpen = () => {
    navCanvasClick[0].className = 'nav-canvas-clicked';
    mainContentClick[0].className = 'main-content-clicked';
    // shadowClick.className='shadow-click';
  };
  const navClose = () => {
    navCanvasClosed[0].className = 'nav-canvas';
    mainContentClosed[0].className = 'main-content';
  };

  return {
    type: TOGGLE_NAVIGATION,
    payload: navCanvasClosed.length === 0 ? navOpen() : navClose(),
  };
}

