import { toggleNavigation } from '../actions/index.js';

const INITIAL_STATE = ['nav-canvas'];

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'TOGGLE_NAVIGATION':
			return action.payload;
		default:
			return state;
	}
}