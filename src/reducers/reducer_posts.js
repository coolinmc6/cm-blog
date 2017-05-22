import { CREATE_POST } from '../actions';

const intro = [{id: 1, title: 'whats up bra?', content: 'Welcome to Colins React Blog'}]

export default function(state = intro, action) {
	switch(action.type) {
		case CREATE_POST:
			return [...state, action.payload];
		default:
			return state;
	}
	// return state;
}