import "rxjs/add/operator/map";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/of";
import Butter from "buttercms";
import { GET_POSTS } from "./posts.reducer";
const butter = Butter("98ce20c960ad5520b685330b0e57e9934aade2d5");
export const PostEpic = (action$, state) =>
	action$.ofType(GET_POSTS).mergeMap((action$) => {
		console.log(butter.post.list({ page: 1, page_size: 10 }));
		console.log("HERE");
		return "HEy";
	});
