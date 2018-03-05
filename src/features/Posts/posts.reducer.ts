type GET_POSTS = "GET_POSTS";
import { SUBMITPOST } from "./posts.reducer";
import { Action } from "types/redux.d.ts";

const GET_POSTS: GET_POSTS = "GET_POSTS";
export interface GETPOSTS extends Action {
	type: GET_POSTS;
}
export function getPosts(): GETPOSTS {
	return {
		type: GET_POSTS
	};
}

type SUBMIT_POST = "SUBMIT_POST";
const SUBMIT_POST: SUBMIT_POST = "SUBMIT_POST";
export interface SUBMITPOST extends Action {
	type: SUBMIT_POST;
	payload: File | string;
}
export function submitPost(post: File | string): SUBMITPOST {
	return {
		type: SUBMIT_POST,
		payload: post
	};
}
