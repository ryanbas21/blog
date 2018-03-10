import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withRedux from 'next-redux-wrapper';
import { compose, curry } from 'ramda';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from '../store';

export const theme = getMuiTheme();

const muiThemeWrapper = curry(
	(
		theme,
		Component: React.ComponentClass<any>
	): (() => JSX.Element) => (): JSX.Element => (
		<MuiThemeProvider muiTheme={theme}>
			<Component />
		</MuiThemeProvider>
	)
);

export default compose(withRedux(store), muiThemeWrapper(theme));
