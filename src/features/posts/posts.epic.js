import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { merge } from 'rxjs/observable/merge';
import { GET_POSTS, getPostsSuccess, loadingPosts } from './posts.reducer';
import { Observable } from 'rxjs/Observable';
import { prop } from 'ramda';
import axios from 'axios';

export const postEpic = (action$, state) => {
	const intent$ = action$.ofType(GET_POSTS);

	const isLoadingPosts$ = intent$.mergeMap(() => Observable.of(loadingPosts()));

	const loadPosts$ = intent$.mergeMap(() =>
		Observable.fromPromise(
			axios.get('https://jsonplaceholder.typicode.com/posts')
		).pipe(map(prop('data')), map(getPostsSuccess))
	);

	const startLoading$ = intent$.mergeMap(() => Observable.of(loadingPosts()));
	return merge(startLoading$, isLoadingPosts$, loadPosts$);
};
