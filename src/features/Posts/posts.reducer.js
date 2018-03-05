export const GET_POSTS = "GET_POSTS";
export function getPosts() {
	return {
		type: GET_POSTS
	};
}
const SUBMIT_POST = "SUBMIT_POST";
export function submitPost(post) {
	return {
		type: SUBMIT_POST,
		payload: post
	};
}
const reducer = function(state = { posts: [{ title: "posts1" }] }, action) {
	switch (action.type) {
		case SUBMIT_POST: {
			return {};
		}
		case GET_POSTS: {
			return {};
		}
		default:
			return state;
	}
};
export default reducer;
