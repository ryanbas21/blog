import { Observable, from, of, pipe } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { prop } from 'ramda';
import {
	GRAB_POST,
	servePost,
	getPostsSuccess,
	loadingPosts
} from './post.reducer';
import { ofType } from 'redux-observable';
import axios from 'axios';

const apiCall = (payload) =>
	from(axios.get('https://jsonplaceholder.typicode.com/posts/' + payload));

const postEpic = (action$, state) =>
	action$.pipe(
		ofType(GRAB_POST),
		switchMap((action) => apiCall(action.payload.id)),
		map(prop('data')),
		map(servePost)
	);
export { postEpic };
