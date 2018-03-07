import { SUBMITPOST } from './posts.reducer';
import { Action, Reducer } from 'types/redux.d.ts';

export type GET_POSTS = 'GET_POSTS';
export const GET_POSTS: GET_POSTS = 'GET_POSTS';
export interface GETPOSTS extends Action<GET_POSTS, undefined> {
	type: GET_POSTS;
}
export function getPosts(): GETPOSTS {
	return {
		type: GET_POSTS
	};
}

export type LOADING_POSTS = 'LOADING_POSTS';
export const LOADING_POSTS: LOADING_POSTS = 'LOADING_POSTS';
export interface LOADINGPOSTS extends Action<LOADING_POSTS, undefined> {}
export function loadingPosts() {
	return {
		type: LOADING_POSTS
	};
}
export type GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_SUCCESS: GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export interface GETPOSTSSUCCESS extends Action<GET_POSTS_SUCCESS, any> {}
export function getPostsSuccess(payload): GETPOSTSSUCCESS {
	return {
		type: GET_POSTS_SUCCESS,
		payload
	};
}
export type SUBMIT_POST = 'SUBMIT_POST';
const SUBMIT_POST: SUBMIT_POST = 'SUBMIT_POST';
export interface SUBMITPOST extends Action<SUBMIT_POST, File | string> {}
export function submitPost(post: File | string): SUBMITPOST {
	return {
		type: SUBMIT_POST,
		payload: post
	};
}

export interface Posts {
	posts?: {}[];
}

export type POSTACTIONS = GETPOSTS | SUBMITPOST | GET_POSTS_SUCCESS;
export type POSTTYPES = GET_POSTS | SUBMIT_POST | GET_POSTS_SUCCESS;

export type PostReducer = Reducer<Posts, Action<POSTTYPES, POSTACTIONS>>;
function initialState() {
	return {
		posts: []
	};
}
const reducer: Reducer<Posts, Action<POSTTYPES, POSTACTIONS>> = function(
	state = initialState(),
	action
): Posts {
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
