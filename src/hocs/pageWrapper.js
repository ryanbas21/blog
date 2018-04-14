import React from 'react';
import withRedux from 'next-redux-wrapper';
import { compose } from 'ramda';
import { Head } from '../components/index';
import store from '../store';

export default compose(withRedux(store), (Component) => () => (
	<div>
		<Head />
		<Component />
	</div>
));
