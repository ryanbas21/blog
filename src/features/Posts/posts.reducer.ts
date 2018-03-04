type GET_POSTS = "GET_POSTS";
const GET_POSTS: GET_POSTS = "GET_POSTS";
export interface GETPOSTS {}
export function getPosts(): GETPOSTS {
	return {
		type: GET_POSTS
	};
}
