import * as React from 'react';
import dynamic from 'next/dynamic';
import { Container, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts, GETPOSTS, PostsData } from './posts.reducer';
import { createSelector } from 'reselect';
import { prop } from 'ramda';

const Feed = dynamic(import('components/feed'), {
	loading: Loader
});
class PostsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		this.props.getPosts();
	}
	render() {
		return (
			<Container textAlign={'center'}>
				{this.props.posts.map((post) => <Feed key={post.title} post={post} />)}
			</Container>
		);
	}
}

const postsSelector = createSelector(
	(state) => prop('posts', state.Posts),
	(posts) => {
		return posts;
	}
);

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
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
