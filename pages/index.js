import * as React from 'react';
import Posts from 'src/features/posts';
import pageWrapper from 'hocs/pageWrapper';

class PostPage extends React.Component {
	render() {
		return <Posts />;
	}
}
export default pageWrapper(PostPage);
