import { Observable, from, merge, of, pipe } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { GET_POSTS, getPostsSuccess, loadingPosts } from './posts.reducer';
import { ofType } from 'redux-observable';
import axios from 'axios';
import { prop, init } from 'ramda';

const apiCall = () =>
	from(axios.get('https://jsonplaceholder.typicode.com/posts'));
const postsEpic = (action$, state) => {
	const intent$ = action$.pipe(
		ofType(GET_POSTS),
		switchMap(apiCall),
		map(prop('data')),
		map(init),
		map(getPostsSuccess)
	);
	const startLoading$ = intent$.pipe(switchMap(() => of(loadingPosts())));
	return merge(startLoading$, intent$);
};

export { postsEpic };
