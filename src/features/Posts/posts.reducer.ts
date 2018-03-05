import { SUBMITPOST } from "./posts.reducer";
import { Action, Reducer } from "types/redux.d.ts";

type GET_POSTS = "GET_POSTS";
export const GET_POSTS: GET_POSTS = "GET_POSTS";
export interface GETPOSTS extends Action<{}> {
	type: GET_POSTS;
}
export function getPosts(): GETPOSTS {
	return {
		type: GET_POSTS
	};
}

type SUBMIT_POST = "SUBMIT_POST";
const SUBMIT_POST: SUBMIT_POST = "SUBMIT_POST";
export interface SUBMITPOST extends Action<{}> {
	type: SUBMIT_POST;
	payload: File | string;
}
export function submitPost(post: File | string): SUBMITPOST {
	return {
		type: SUBMIT_POST,
		payload: post
	};
}

export interface Posts {
	posts?: { title: string }[];
}

export type POSTACTIONS = GETPOSTS | SUBMITPOST;
const reducer: Reducer<Posts, Action<POSTACTIONS>> = function(
	state: Posts = { posts: [{ title: "posts1" }] },
	action: Action<{}>
): Posts {
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
