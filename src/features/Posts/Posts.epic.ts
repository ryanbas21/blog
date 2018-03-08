import { ActionsObservable } from 'redux-observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { merge } from 'rxjs/observable/merge';
import { ButterData } from 'types/global.d.ts';
import Butter from 'buttercms';
import {
	GETPOSTS,
	GET_POSTS,
	getPostsSuccess,
	loadingPosts,
	LOADINGPOSTS
} from './posts.reducer';
import { RootState } from '../../store/index';
import { Observable } from 'rxjs/Observable';
import { GETPOSTSSUCCESS } from './posts.reducer';
import { prop } from 'ramda';

const butter = Butter('98ce20c960ad5520b685330b0e57e9934aade2d5');
export const PostEpic = (
	action$: ActionsObservable<GETPOSTS>,
	state: RootState
) => {
	const intent$ = action$.ofType(GET_POSTS);

	const isLoadingPosts$: Observable<LOADINGPOSTS> = intent$.mergeMap(() =>
		Observable.of(loadingPosts())
	);

	const loadPosts$: Observable<GETPOSTSSUCCESS> = intent$.mergeMap(() =>
		Observable.fromPromise<ButterData.data>(
			butter.post.list({ page: 1, page_size: 10 })
		).pipe(map(prop('data')), map(prop('data')), map(getPostsSuccess))
	);
	const startLoading$ = intent$.mergeMap(() => Observable.of(loadingPosts()));
	return merge(startLoading$, isLoadingPosts$, loadPosts$);
};
