import React from 'react';
import { connect } from 'react-redux';
import pageWrapper from 'hocs/pageWrapper';
import { getCurrentPost } from 'features/posts/posts.reducer';

const BlogPost = (props) => (
	<div>
		{console.log(props)}
		Hello
	</div>
);

function mapStateToProps(state) {
	return getCurrentPost(state);
}

function mapDispatchToProps(dispatch) {
	return {};
}

const Post = connect(mapStateToProps, mapDispatchToProps)(BlogPost);
export default Post;
