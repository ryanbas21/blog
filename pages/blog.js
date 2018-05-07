import React from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { reduxWrapper } from 'hocs/pageWrapper';
import { Loader, Dimmer } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { of } from 'rxjs';
import { grabPost, blogSelector } from 'features/post/post.reducer';
import { Post } from 'features';
import rootEpic from 'src/root-epic';

class BlogPost extends React.Component {
	constructor() {
		super();
		this.state = {
			postId: null
		};
	}
	static async getInitialProps({ query, params, store }) {
		const resultAction = await rootEpic(of(grabPost(query)), store).toPromise();
		store.dispatch(resultAction);
	}
	render() {
		return <Post postId={this.state.postId} />;
	}
}

export default reduxWrapper(BlogPost);
