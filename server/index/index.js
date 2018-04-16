const { curry, prop, map } = require('ramda');
const { encaseP, encase, tryP } = require('fluture');
const axios = require('axios');

const gatherPosts = curry(function(req, res, next) {
	return apiCall.fork(console.error, right(res, next));
});

module.exports = gatherPosts;

const right = curry((res, next, data) => {
	res.locals.posts = data;
	next();
});
const apiCall = encaseP(axios.get)(
	'https://jsonplaceholder.typicode.com/posts'
).map(prop('data'));
