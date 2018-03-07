import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withRedux from 'next-redux-wrapper';
import { compose, curry } from 'ramda';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from '../store';
export const theme = getMuiTheme();
const muiThemeWrapper = curry((theme, Component) => () =>
	React.createElement(
		MuiThemeProvider,
		{ muiTheme: theme },
		React.createElement(Component, null)
	)
);
export default compose(withRedux(store), muiThemeWrapper(theme));
