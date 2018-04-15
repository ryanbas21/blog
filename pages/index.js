import * as React from 'react';
import Posts from 'src/features/posts';
import pageWrapper from 'hocs/pageWrapper';

class PostPage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	static async getInitialProps({ req, res, locals }) {
		const isServer = !!req;

		console.log('getInitialProps called:', isServer ? 'server' : 'client');

		if (isServer) {
			// When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
			// saving us an http call. Note that if we were to try to require('../operations/get-item') here,
			// it would result in a webpack error.
			return { item: locals };
		}
	}
	render() {
		console.log('props', this.props);
		return <Posts />;
	}
}
export default pageWrapper(PostPage);
