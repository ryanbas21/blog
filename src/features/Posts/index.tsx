import * as React from "react";
import { Action } from "types/redux";
import { connect, Dispatch } from "react-redux";
import { RootState } from "store";
import {
	getPosts,
	POSTACTIONS,
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
		console.log(this.props.getPosts());
		this.props.getPosts();
		this.props.submitPost();
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
function mapDispatchToProps(dispatch: Dispatch<Action<POSTACTIONS>>) {
	return {
		getPosts,
		submitPost
	};
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

export default Posts;
