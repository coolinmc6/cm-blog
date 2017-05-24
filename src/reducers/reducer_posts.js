import { CREATE_POST, FETCH_POST } from '../actions';

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
			return [...state]
		default:
			return state;
	}
	// return state;
}