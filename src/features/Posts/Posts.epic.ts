import { ActionsObservable } from "redux-observable";
import { Action } from "types/redux.d.ts";
import "rxjs/add/operator/map";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/of";
import Butter from "buttercms";
import { GETPOSTS, GET_POSTS } from "./posts.reducer";
import { RootState } from "../../store/index";
// import { Observable } from "rxjs/Observable";

const butter = Butter("98ce20c960ad5520b685330b0e57e9934aade2d5");
export const PostEpic = (
	action$: ActionsObservable<GETPOSTS>,
	state: RootState
) =>
	action$.ofType(GET_POSTS).mergeMap((action$: Action<{}>) => {
		console.log(butter.post.list({ page: 1, page_size: 10 }));
		console.log("HERE");
		return "HEy";
	});
