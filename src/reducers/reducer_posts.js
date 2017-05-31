import { CREATE_POST, FETCH_POST, DELETE_POST } from '../actions';

const intro = [
	{
		id: 1, 
		title: 'Welcome!', 
		tag: "intro", 
		content: "Welcome to Colins React Blog App!  This basic app allows the user to add \"blog\" posts using Redux and ReduxForm and to navigate around the application using React-Router. Please take a look around: create a post, delete a post, navigate around, you know the drill.  When you want to learn more, click the 'About' link in the top right and reach out.  Thanks and I  look forward to talking to you."
	}
]

export default function(state = intro, action) {
	switch(action.type) {
		case CREATE_POST:
			return [...state, action.payload];
		case FETCH_POST:
			return [...state];
		case DELETE_POST:
			const delIndex = state.findIndex((item) => item.id === action.payload);
			const newList = [...state.slice(0,delIndex),
							...state.slice(delIndex+1)];
			return newList;
		default:
			return state;
	}
	// return state;
}