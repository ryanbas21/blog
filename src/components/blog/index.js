import * as React from 'react';

const Blog = (props) => (
	<React.Fragment>
		<a href={props.post.url}>{props.post.title}</a>
	</React.Fragment>
);

export default Blog;
