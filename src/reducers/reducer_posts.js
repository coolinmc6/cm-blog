import { CREATE_POST, FETCH_POST } from '../actions';

const intro = [{id: 1, title: 'whats up bra?', content: 'Welcome to Colins React Blog'}]

export default function(state = intro, action) {
	switch(action.type) {
		case CREATE_POST:
			return [...state, action.payload];
		case FETCH_POST:
			return [...state]
		default:
			return state;
	}
	// return state;
}