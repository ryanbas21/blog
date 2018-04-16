import * as React from 'react';
import { Feed } from 'semantic-ui-react';
import Link from 'next/link';

const Blog = ({ post }) => (
	<Feed
		style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		size={'large'}>
		<Feed.Event>
			<Feed.Label>
				<img src={post.img || '/static/default.png'} />
			</Feed.Label>
			<Feed.Content style={{ width: 'auto' }}>
				<Feed.Summary>
					<a>{post.title}</a>
					{/* </Link> */}
				</Feed.Summary>
				<Feed.Extra
					style={{
						width: 400,
						display: 'flex',
						justifyContent: 'space-around'
					}}>
					{post.body.slice(0, 200)}...
				</Feed.Extra>
			</Feed.Content>
		</Feed.Event>
	</Feed>
);

export default Blog;
