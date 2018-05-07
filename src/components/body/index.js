import React from 'react';
import { Container } from 'semantic-ui-react';

const styles = {
	post: {
		padding: '5px',
		margin: '10px',
		minWidth: '200px',
		maxWidth: '1000px',
		lineHeight: '20px',
		fontWeight: 'bold',
		fontSize: '2em',
		textAlign: 'center'
	},
	center: {
		display: 'flex',
		height: '100%',
		padding: 0,
		margin: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
const BlogPost = (props) => (
	<div style={styles.center}>
		<p>{props.body}</p>
	</div>
);

export default BlogPost;
