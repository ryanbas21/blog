import * as React from 'react';
import { Feed } from 'semantic-ui-react';
import Link from 'next/link';

const Blog = (props) => (
	<Feed
		style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		size={'large'}>
		<Feed.Event>
			<Feed.Label>
				<img src={props.post.img || '/static/default.png'} />
			</Feed.Label>
			<Feed.Content style={{ width: 'auto' }}>
				<Feed.Summary>
					<Link prefetch href={`blog?id=${props.post.id}`} passHref>
						<a>{props.post.title}</a>
					</Link>
				</Feed.Summary>
				<Feed.Extra
					style={{
						width: 400,
						display: 'flex',
						justifyContent: 'space-around'
					}}>
					{props.post.body.slice(0, 200)}...
				</Feed.Extra>
			</Feed.Content>
		</Feed.Event>
	</Feed>
);

export default Blog;
