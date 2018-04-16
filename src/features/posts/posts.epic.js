import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { GET_POSTS, getPostsSuccess, loadingPosts } from './posts.reducer';
import { ofType } from 'redux-observable';
import { prop, init } from 'ramda';
import axios from 'axios';

export const postEpic = (action$, state) => {
	const intent$ = action$.pipe(
		ofType(GET_POSTS),
		mergeMap(() =>
			Observable.fromPromise(
				axios.get('https://jsonplaceholder.typicode.com/posts')
			)
		),
		map(prop('data')),
		map(init),
		map(getPostsSuccess)
	);

	const startLoading$ = intent$.mergeMap(() => Observable.of(loadingPosts()));
	return merge(startLoading$, intent$);
};
