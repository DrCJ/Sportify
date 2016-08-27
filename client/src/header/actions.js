import { TOGGLE_NAVIGATION } from './actionTypes';

export function toggleNavigation() {
  const navCanvasClick = document.getElementsByClassName('nav-canvas');
  const mainContentClick = document.getElementsByClassName('main-content');
  const shadowClick = document.getElementsByClassName('shadow');
  const menuBtn = document.getElementsByClassName('menu-btn');
  const appContainer = document.getElementsByClassName('app-container');


  const navOpen = (evt) => {
    appContainer[0].className = 'app-container shift';
    menuBtn[0].className = 'menu-btn open';
    navCanvasClick[0].className = 'nav-canvas-clicked';
    mainContentClick[0].className = 'main-content-clicked';
    shadowClick[0].className = 'shadow-click';
  };

  return {
    type: 'TOGGLE_NAVIGATION',
    payload: navOpen(),
  };
}
