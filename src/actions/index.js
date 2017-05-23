// ACTIONS

export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post
	}
}

export function fetchPost(id) {
	return {
		type: FETCH_POST,
		payload: id
	}
}