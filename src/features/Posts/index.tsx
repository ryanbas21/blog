import * as React from 'react';
import { Action } from 'types/redux';
import { Blog } from '../../components';
import { connect, Dispatch } from 'react-redux';
import { RootState } from 'store';
import {
	getPosts,
	POSTACTIONS,
	POSTTYPES,
	GETPOSTS,
	PostsData
} from './posts.reducer';

export interface POSTS {
	getPosts: () => GETPOSTS;
	posts: PostsData[];
}
export interface PostState {
	posts?: PostsData[];
}
class PostsComponent extends React.Component<POSTS, PostState> {
	constructor(props: POSTS) {
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
				{this.props.posts.map((post) => (
					<Blog key={post.author.title} post={post} />
				))}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state: RootState): { posts: any[] } {
	return {
		posts: state.Posts.posts
	};
}
function mapDispatchToProps(
	dispatch: Dispatch<Action<POSTTYPES, POSTACTIONS>>
) {
	return {
		getPosts: () => dispatch(getPosts())
	};
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
