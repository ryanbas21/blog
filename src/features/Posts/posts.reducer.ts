import { SUBMITPOST } from './posts.reducer';
import { Action, Reducer } from 'types/redux.d.ts';
// import { createSelector } from 'reselect';
import { RootState } from 'store';
import { map, prop, pipe } from 'ramda';
import { PostState } from './index';

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
export interface GETPOSTSSUCCESS extends Action<GET_POSTS_SUCCESS, PostsData> {}
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
export const getPostTitles = (state: RootState) =>
	map(pipe(prop('author'), prop('title')), state.posts);

// const getPostInformation = (state: RootState) => map(reduce(, state.posts);

// const postsDisplay = createSelector([getPostTitles, getPostInformation]);
export interface PostsData {
	url: string;
	title: string;
	created: string;
	published: string;
	author: {
		first_name: string;
		last_name: string;
		email: string;
		slug: string;
		bio: string;
		title: string;
		linkedin_url: string;
		facebook_url: string;
		instagram_url: string;
		twitter_handle: string;
		profile_image: string;
	};
	categories: {
		name: string;
		slug: string;
	}[];
	tags: {
		name: string;
		slug: string;
	};
}
export interface Posts {
	posts: PostsData[];
}
export type POSTACTIONS = GETPOSTS | SUBMITPOST | GETPOSTSSUCCESS;
export type POSTTYPES = GET_POSTS | SUBMIT_POST | GET_POSTS_SUCCESS;

export type PostReducer = Reducer<PostState, POSTACTIONS>;
function initialState() {
	return {
		posts: []
	};
}
function reducer(
	state: PostState = initialState(),
	action: POSTACTIONS
): PostState {
	switch (action.type) {
		case SUBMIT_POST: {
			return state;
		}
		case GET_POSTS: {
			return state;
		}
		case GET_POSTS_SUCCESS: {
			return {
				...state,
				posts: state.posts.concat(action.payload as any)
			};
		}
		default:
			return state;
	}
}

export default reducer;
