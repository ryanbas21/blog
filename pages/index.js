import * as React from 'react';
import Posts from 'src/features/posts';
import store from 'src/store';
import Head from 'components/head';
import { compose } from 'ramda';
import withRedux from 'next-redux-wrapper';
import rootEpic from 'src/root-epic';
import { of } from 'rxjs/observable/of';
import { getPosts } from 'src/features/posts/posts.reducer';

class PostPage extends React.Component {
	static async getInitialProps(ctx) {
		const resultAction = await rootEpic(of(getPosts()), ctx.store).toPromise();
		ctx.store.dispatch(resultAction);
	}
	render() {
		const { posts } = this.props;
		console.log(posts);
		return (
			<React.Fragment>
				<Head />
				<Posts posts={posts} />
			</React.Fragment>
		);
	}
}

export default compose(withRedux(store))(PostPage);
