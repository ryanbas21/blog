import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { merge } from 'rxjs/observable/merge';
import Butter from 'buttercms';
import { GET_POSTS, getPostsSuccess, loadingPosts } from './posts.reducer';
import { Observable } from 'rxjs/Observable';
import { prop } from 'ramda';
const butter = Butter('98ce20c960ad5520b685330b0e57e9934aade2d5');
export const PostEpic = (action$, state) => {
	const intent$ = action$.ofType(GET_POSTS);
	const isLoadingPosts$ = intent$.mergeMap(() => Observable.of(loadingPosts()));
	const loadPosts$ = intent$.mergeMap(() =>
		Observable.fromPromise(butter.post.list({ page: 1, page_size: 10 })).pipe(
			map(prop('data')),
			map(prop('data')),
			map(getPostsSuccess)
		)
	);
	const startLoading$ = intent$.mergeMap(() => Observable.of(loadingPosts()));
	return merge(startLoading$, isLoadingPosts$, loadPosts$);
};
