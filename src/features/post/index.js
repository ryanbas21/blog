import React from 'react';
import pageWrapper from 'hocs/pageWrapper';
import { connect } from 'react-redux';
import { Body, Title } from 'components';
import { blogSelector } from './post.reducer';
import { Divider, Container } from 'semantic-ui-react';

class PostComponent extends React.Component {
	render() {
		const { title, body } = this.props;
		return (
			<div>
				<Title title={title} />
				<Divider />
				<Container>
					<Body body={body} />
				</Container>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {};
}

const Post = connect(blogSelector, mapDispatchToProps)(PostComponent);
export default Post;
