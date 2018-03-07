import * as React from "react";
import { connect } from "react-redux";
import { getPosts, submitPost } from "./posts.reducer";
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
			React.createElement("div", null, " Posts Page ")
		);
	}
}
function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(getPosts()),
		submitPost
	};
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
export default Posts;
