import { map, prop, pipe } from 'ramda';
import { createSelector } from 'reselect';

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
const CURRENT_POST = 'CURRENT_POST';
export function currentPost(payload) {
	return {
		type: CURRENT_POST,
		payload
	};
}
export const getPostTitles = (state) =>
	map(pipe(prop('author'), prop('title')), state.posts);

export const getCurrentPost = createSelector(
	(state) => prop('currentPost', state.Posts),
	(currentPost) => ({ currentPost })
);

export const postsSelector = createSelector(
	(state) => prop('posts', state.Posts),
	(posts) => {
		return posts;
	}
);

function initialState() {
	return {
		posts: []
	};
}

function initialState() {
	return {
		posts: []
	};
}
export default function reducer(state = initialState(), action) {
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
				posts: state.posts.concat(action.payload)
			};
		}
		case CURRENT_POST: {
			return {
				...state,
				currentPost: action.payload
			};
		}
		default:
			return state;
	}
}
