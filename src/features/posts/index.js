import * as React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Container, Loader } from 'semantic-ui-react';
import {
	getPosts,
	GETPOSTS,
	PostsData,
	currentPost,
	postsSelector
} from './posts.reducer';
import Feed from 'components/feed';

class PostsComponent extends React.Component {
	handlePost = (post) => {
		this.props.currentPost(post);
		Router.push({ pathname: `/blog`, query: { id: post.id } });
	};
	render() {
		return (
			<React.Fragment>
				{this.props.posts.map((post, index, self) => (
					<div key={post.title} onClick={() => this.handlePost(post)}>
						<Feed post={post} />
					</div>
				))}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: postsSelector(state)
	};
}
const mapDispatchToProps = dispatch => ({
	getPosts: () => dispatch(getPosts()),
	currentPost: (post) => dispatch(currentPost(post))
});
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
