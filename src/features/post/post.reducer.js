import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const GRAB_POST = 'GRAB_POST';

export function grabPost(post) {
	return {
		type: GRAB_POST,
		payload: post
	};
}

const SERVE_POST = 'SERVE_POST';
export function servePost(data) {
	return {
		type: SERVE_POST,
		payload: data
	};
}

export const blogSelector = createSelector(
	prop('Current'),
	({ title, body }) => {
		console.log(title, body);
		return {
			title,
			body
		};
	}
);

function initialState(state) {
	return {};
}
export default function postReducer(state = initialState(), action) {
	switch (action.type) {
		case SERVE_POST: {
			return {
				...action.payload
			};
		}
		default:
			return state;
	}
}
