import * as React from 'react';
const Blog = (props) =>
	React.createElement(
		React.Fragment,
		null,
		console.log(props.post),
		React.createElement('a', null)
	);
export default Blog;
