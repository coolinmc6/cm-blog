import { CREATE_POST, FETCH_POST, DELETE_POST } from '../actions';

const intro = [
	{
		id: 1, 
		title: 'Welcome!', 
		tag: "intro", 
		content: "Welcome to Colins React Blog App!  This basic app allows the user to add \"blog\" posts using Redux and ReduxForm\
		 and navigate around the application using React-Router. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit similique ex modi, corrupti dolores facilis praesentium veritatis cupiditate consequatur aliquid incidunt provident, eum voluptatum optio recusandae, harum placeat deserunt quo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nam saepe earum blanditiis, quasi obcaecati sequi voluptates odit ipsam vero esse error rerum sunt ducimus, maiores nisi veniam ex molestias."
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