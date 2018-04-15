import React from 'react';
import dynamic from 'next/dynamic';
import pageWrapper from 'hocs/pageWrapper';
import { Loader, Dimmer } from 'semantic-ui-react';

const Post = dynamic(import('components/post'), {
	loading: () => (
		<Dimmer active>
			<Loader />
		</Dimmer>
	)
});

const BlogPost = (props) => <Post />;

export default pageWrapper(BlogPost);
