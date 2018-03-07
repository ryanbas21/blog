import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import Butter from 'buttercms';
import { GET_POSTS, getPostsSuccess, loadingPosts } from './posts.reducer';
import { Observable } from 'rxjs/Observable';
const butter = Butter('98ce20c960ad5520b685330b0e57e9934aade2d5');
export const PostEpic = (action$, state) =>
	action$
		.ofType(GET_POSTS)
		.mergeMap((action$) =>
			Observable.fromPromise(
				butter.post.list({ page: 1, page_size: 10 })
			).concat([loadingPosts(), map(getPostsSuccess)])
		);
