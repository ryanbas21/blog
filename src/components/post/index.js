import React from 'react';
import { connect } from 'react-redux';
import pageWrapper from 'hocs/pageWrapper';

const BlogPost = (props) => <div>Hello</div>;

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

const Post = connect(mapStateToProps, mapDispatchToProps)(BlogPost);
export default Post;
