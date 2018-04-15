import * as React from 'react';
import Router from 'next/router';
import { Container, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
	getPosts,
	GETPOSTS,
	PostsData,
	currentPost,
	postsSelector
} from './posts.reducer';
import Feed from 'components/feed';

class PostsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {}
	render() {
		return (
			<Container textAlign={'center'}>
				{/* {this.props.posts.map((post) => <Feed key={post.title} post={post} />)} */}
			</Container>
		);
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
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
