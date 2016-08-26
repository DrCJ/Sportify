import { expect } from 'chai';
import { CANCEL_NAVIGATION, CANCEL_MODAL } from '../../client/src/app/actionTypes';
import { FETCH_SPECIFIC_PLAYERS } from '../../client/src/compare/actionTypes';
import { TOGGLE_NAVIGATION } from '../../client/src/header/actionTypes';
import { FETCH_LEAGUES } from '../../client/src/league/actionTypes';
import { GET_ONE_PLAYER_MODAL, REQUEST_ALL_PLAYERS, FILTER_PLAYERS } from '../../client/src/player/actionTypes';
import { FETCH_ROSTER } from '../../client/src/yahooTeam/actionTypes';

import { closeNavigation, closeModal } from '../../client/src/app/actions';
import { fetchSpecificPlayers } from '../../client/src/compare/actions';
import { toggleNavigation } from '../../client/src/header/actions';
import { fetchLeagues } from '../../client/src/league/actions';
import { requestAllPlayers, getOnePlayerModal, filterPlayers } from '../../client/src/player/actions';
import { fetchRoster } from '../../client/src/yahooTeam/actions';



describe('AppActions', () => {
  describe('closeNavigation', () => {
    it('has the correct type', () => {
      const action = closeNavigation;
      expect(action.type).to.equal((CANCEL_NAVIGATION));
    });
  });
  describe('closeModal', () => {
    it('has the correct type', () => {
      const action = closeModal;
      expect(action.type).to.equal((CANCEL_MODAL));
    });
  });
});

describe('CompareActions', () => {
  describe('fetch_specific_players', () => {
    it('has the correct type', () => {
      const action = fetchSpecificPlayers;
      expect(action.type).to.equal((FETCH_SPECIFIC_PLAYERS))
    });
  });
});

describe('HeaderActions', () => {
  describe('toggleNavigation', () => {
    it('has the correct type', () => {
      const action = toggleNavigation;
      expect(action.type).to.equal((TOGGLE_NAVIGATION));
    });
  });
});

describe('LeageActions', () => {
  describe('fetchLeagues', () => {
    it('has the correct type', () => {
      const action = fetchLeagues;
      expect(action.type).to.equal((FETCH_LEAGUES));
    });
  });
});

describe('playerActions', () => {
  describe('requestAllPlayers', () => {
    it('has the correct type', () => {
      const action = requestAllPlayers;
      expect(action.type).to.equal((REQUEST_ALL_PLAYERS));
    });
  });
  describe('getOnePlayerModal', () => {
    it('has the correct type', () => {
      const action = getOnePlayerModal;
      expect(action.type).to.equal((GET_ONE_PLAYER_MODAL));
    });
  });
});

describe('playerModal', () => {
  describe('closeModal', () => {
    it('has the correct type', () => {
      const action = closeModal;
      expect(action.type).to.equal((CANCEL_MODAL));
    });
  });
});

describe('yahooTeam', () => {
  describe('fetchRoster', () => {
    it('has the correct type', () => {
      const action = fetchRoster;
      expect(action.type).to.equal((FETCH_ROSTER));
    });
  });
});
