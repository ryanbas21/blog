import * as React from 'react';
import { Feed } from 'semantic-ui-react';

const defaultImage = '../../../static/default.png';
const Blog = (props) => (
	<Feed
		style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		size={'large'}>
		<Feed.Event>
			<Feed.Label>
				<img src={props.post.img || defaultImage} />
			</Feed.Label>
			<Feed.Content style={{ width: 'auto' }}>
				<Feed.Summary>
					<a href={props.post.url}>{props.post.title}</a>
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
