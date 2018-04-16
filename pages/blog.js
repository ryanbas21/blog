import React from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import pageWrapper from 'hocs/pageWrapper';
import { Loader, Dimmer } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { postsSelector } from 'features/posts/posts.reducer';

const Post = dynamic(import('components/post'), {
	loading: () => (
		<Dimmer active>
			<Loader />
		</Dimmer>
	)
});

class BlogPost extends React.Component {
	constructor() {
		super();
		this.state = {
			postId: null
		};
	}
	render() {
		return <Post postId={this.state.postId} />;
	}
}

function mapStateToProps(state) {
	return {
		posts: postsSelector(state)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(getPosts())
	};
}
const BlogPostConnected = connect(mapStateToProps, mapDispatchToProps)(
	BlogPost
);
export default pageWrapper(BlogPostConnected);
