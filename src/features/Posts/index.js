import * as React from 'react';
import { Blog } from '../../components';
import { connect } from 'react-redux';
import { getPosts } from './posts.reducer';
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
		return React.createElement(
			React.Fragment,
			null,
			React.createElement('div', null, ' Posts Page '),
			this.props.posts.map((post) =>
				React.createElement(Blog, { key: post.author.title, post: post })
			)
		);
	}
}
function mapStateToProps(state) {
	return {
		posts: state.Posts.posts
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(getPosts())
	};
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
export default Posts;
