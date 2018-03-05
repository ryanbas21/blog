import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import withRedux from "next-redux-wrapper";
import { compose } from "ramda";
import getMuiTheme from "material-ui/styles/getMuiTheme";

export const createTheme = getMuiTheme({ userAgent: false });

const muiThemeWrapper = (theme: any) => (
	Component: React.ComponentClass<any>
) => (
	<MuiThemeProvider muiTheme={theme}>
		<Component />
	</MuiThemeProvider>
);

export default compose(withRedux, muiThemeWrapper(createTheme) as any);
