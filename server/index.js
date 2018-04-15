const express = require('express');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const { curry } = require('ramda');
const gatherPosts = require('./index/index');

const appRender = curry((route, req, res) => {
	return app.render(req, res, route, req.query);
});

app.prepare().then(() => {
	const server = express();
	server.use(bodyParser.json());

	server.get('/', gatherPosts, (route, req, res) => {
		return app.render(req, res, '/', { query: req.query, locals: res.locals });
	});

	server.get('/b', appRender('/b'));

	server.get('*', (req, res) => handle(req, res));

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
