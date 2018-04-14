import * as React from 'react';
import { Blog } from '../../components';
import { connect } from 'react-redux';
import { getPosts, GETPOSTS, PostsData } from './posts.reducer';
import { Container } from 'semantic-ui-react';

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
			<React.Fragment>
				<div> Posts Page </div>
				<Container textAlign={'center'}>
					{this.props.posts.map((post) => (
						<Blog key={post.title} post={post} />
					))}
				</Container>
			</React.Fragment>
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
