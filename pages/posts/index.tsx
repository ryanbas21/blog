import * as React from 'react';
import Posts from '../../src/features/Posts';
import pageWrapper from '../../src/hocs/pageWrapper';

class PostPage extends React.Component<{}, {}> {
	render() {
		return <Posts />;
	}
}
export default pageWrapper(PostPage);