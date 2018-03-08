import * as React from 'react';
import { PostsData } from '../../features/Posts/posts.reducer';

interface BlogProps {
	key: React.Key;
	post: PostsData;
}
const Blog: React.SFC<BlogProps> = (props) => (
	<React.Fragment>
		<a href={props.post.url}>{props.post.title}</a>
	</React.Fragment>
);

export default Blog;
