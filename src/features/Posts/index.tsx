import * as React from "react";
import { Action } from "types/redux";
import { connect, Dispatch } from "react-redux";
import { RootState } from "store";
import {
	getPosts,
	POSTACTIONS,
	POSTTYPES,
	GETPOSTS,
	submitPost,
	SUBMITPOST
} from "./posts.reducer";

export interface POSTS {
	getPosts: () => GETPOSTS;
	submitPost: () => SUBMITPOST;
	posts: { title: string }[];
}
export interface PostState {
	posts?: { title: string }[];
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
			</React.Fragment>
		);
	}
}

function mapStateToProps(state: RootState) {
	return {
		posts: state.posts
	};
}
function mapDispatchToProps(
	dispatch: Dispatch<Action<POSTTYPES, POSTACTIONS>>
) {
	return {
		getPosts: () => dispatch(getPosts()),
		submitPost
	};
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
