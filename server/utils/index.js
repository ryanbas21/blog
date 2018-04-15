const { curry } = require('ramda');

module.exports = curry((app, route, req, res) => {
	return app.render(req, res, route, req.query);
});
