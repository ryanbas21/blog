export const GET_POSTS = 'GET_POSTS';
export function getPosts() {
	return {
		type: GET_POSTS
	};
}
export const LOADING_POSTS = 'LOADING_POSTS';
export function loadingPosts() {
	return {
		type: LOADING_POSTS
	};
}
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export function getPostsSuccess(payload) {
	return {
		type: GET_POSTS_SUCCESS,
		payload
	};
}
const SUBMIT_POST = 'SUBMIT_POST';
export function submitPost(post) {
	return {
		type: SUBMIT_POST,
		payload: post
	};
}
function initialState() {
	return {
		posts: []
	};
}
const reducer = function(state = initialState(), action) {
	switch (action.type) {
		case SUBMIT_POST: {
			return {};
		}
		case GET_POSTS: {
			return state;
		}
		case GET_POSTS_SUCCESS: {
			return {
				...state,
				posts: state.posts.concat(action.payload)
			};
		}
		default:
			return state;
	}
};
export default reducer;
