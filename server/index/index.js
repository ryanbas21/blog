import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { curry, prop, map } from 'ramda';

const addDataToResponse = curry((req, res, next, data) => {
	res.data = data;
	return res;
});

export function gatherPosts(req, res, next) {
	return Observable.fromPromise(
		axios.get('https://jsonplaceholder.typicode.com/posts')
	).pipe(map(prop('data')), map(addDataToResponse(req, res, next)));
}
