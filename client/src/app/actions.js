export function closeNavigation() {
  const mainContentClosed = document.getElementsByClassName('main-content-clicked');
  const shadowClosed = document.getElementsByClassName('shadow-click');
  const navCanvasClosed = document.getElementsByClassName('nav-canvas-clicked');
  const menuBtn = document.getElementsByClassName('menu-btn');

  const navClose = () => {
    menuBtn[0].className = 'menu-btn';
    navCanvasClosed[0].className = 'nav-canvas';
    mainContentClosed[0].className = 'main-content';
    shadowClosed[0].className = 'shadow';
  };

  return {
    type: 'CANCEL_NAVIGATION',
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
    type: 'CANCEL_MODAL',
    payload: modalClose(),
  };
}
